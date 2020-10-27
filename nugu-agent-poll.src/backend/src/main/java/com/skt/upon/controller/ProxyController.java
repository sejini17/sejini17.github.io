package com.skt.upon.controller;

import java.io.UnsupportedEncodingException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONTokener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ProxyController {

    @Value("${proxy-target.url-prefix}")
    private String urlPrefix;

    @Autowired
    ResourceLoader resourceLoader;

    @RequestMapping("/api/**")
    public ResponseEntity<byte[]> proxyDemo(
        HttpServletRequest request, HttpServletResponse response,
        @RequestBody(required = false) byte[] body) throws UnsupportedEncodingException, URISyntaxException {

            return proxy(request, response, body, urlPrefix
            , request.getRequestURI().replaceAll("^/api", "")
        );
    }

    public ResponseEntity<byte[]> proxy(
        HttpServletRequest request, HttpServletResponse response,
        @RequestBody(required = false) byte[] body,
        String proxyTargetUrlPrefix,
        String reqUri
        ) throws UnsupportedEncodingException, URISyntaxException {

        String originQueryString = request.getQueryString();

        // header
        Enumeration<String> headerNames = request.getHeaderNames();
        MultiValueMap<String, String> headers = new LinkedMultiValueMap<>();
        while (headerNames.hasMoreElements()) {
            String headerName = headerNames.nextElement();
            String headerValue = request.getHeader(headerName);

            headers.add(headerName, headerValue);
        }

        if (null == reqUri) 
            reqUri = request.getRequestURI();    // .replaceAll("^/proxy", "");
        String queryPath = reqUri
            + (StringUtils.isEmpty(originQueryString) ? "" : "?" + originQueryString);
        String url = proxyTargetUrlPrefix + queryPath;

        // log.info("exchange skipped, \nurl : {}, \nbody : {}", url, new String(body, "UTF-8"));
        // return exchange(new URI(url), headers, body, byte[].class);
        String reqBodyString = StringUtils.isEmpty(body) ? "" : new String(body, "UTF-8");

        String resBodyString = exchange(new URI(url), 
            // HttpMethod.POST,
            HttpMethod.valueOf(request.getMethod()), //request.getHeader("x-origin-method").toUpperCase()),

            headers, body, String.class
        ).getBody();

        String parsedJson = "";
        Object json = new JSONTokener(resBodyString).nextValue();
        if (json instanceof JSONObject) 
            parsedJson = ((JSONObject)json).toString();
        else if (json instanceof JSONArray)
            parsedJson = ((JSONArray)json).toString();

        log.debug(new JSONObject()
            .put("reqPath", queryPath)
            .put("reqHash", String.valueOf(reqBodyString.hashCode()))
            .put("reqString", reqBodyString)

            .put("resString", parsedJson)
        .toString());

        return ResponseEntity.ok(resBodyString.getBytes());
    }

    private <T> ResponseEntity<T> exchange(URI url, HttpMethod method, MultiValueMap<String, String> headers, byte[] body,
            Class<T> responseType) throws UnsupportedEncodingException {
        HttpComponentsClientHttpRequestFactory httpRequestFactory = new HttpComponentsClientHttpRequestFactory();
        httpRequestFactory.setConnectionRequestTimeout(360000); //6m
        httpRequestFactory.setConnectTimeout(360000); //6m
        httpRequestFactory.setReadTimeout(360000); //6m

        try {
            return new RestTemplate(httpRequestFactory).exchange(
                url, method,
                
                new HttpEntity<>(body, headers), 
                responseType
            );
        }
        catch (HttpClientErrorException ex) {
            log.error("HttpClientErrorException : {} {}", ex.getStatusCode(), ex.getStatusText());
            log.error("exchange error, \nurl : {}, \nbody : {}", url, new String(body, "UTF-8"));
            throw ex;
        }
        catch (Exception ex) {
            log.error(
                String.format("exchange error, \nurl : %s, \nbody : %s", url, new String(body, "UTF-8")), 
                ex
            );
        }

        return null;
	}
}