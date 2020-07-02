import axios from 'axios'

// const baseURL = process.env.NODE_ENV === 'production'
//   ? 'http://172.27.98.159:49990/api/curation'
//   : 'http://localhost:49990/api/curation';
const baseURL = '/vod/btv/api/v1.0'

const request = axios.create({
  baseURL
});

export default {
    async getMetaById(id, item) {
        let result  = await request.post(
            '/meta-id-search', 
            {
                'query' : id,
                'topn' : 1
            }
        )
        // console.log("result:", result)
        result = result.data.response.documents[0]

        if (item) {
            result.kmdb_kwd_refine = item.kmdb_kwd_refine
            result.kmdb_kwd = item.kmdb_kwd
        }

        return result
    }
}

