import { rest } from 'msw';

const getTopics = rest.get('/topics', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            "topics":[
                {"id":1,"title":"html","body":"html is ..."},
                {"id":2,"title":"css","body":"css is ..."},
            ]
        })
    );
})

// {
//     "posts": [
//         {
//             "id": 1,
//             "title": "json-server",
//             "author": "typicode"
//         }
//     ],
//     "comments": [
//         {
//             "id": 1,
//             "body": "some comment",
//             "postId": 1
//         }
//     ],
//     "profile": {
//         "name": "typicode"
//     }
// }
export default getTopics;