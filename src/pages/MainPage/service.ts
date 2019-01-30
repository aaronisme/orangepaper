import { article } from '../../models/article'


const ALL_POST = 'https://orange.xyz/api/getallarticle'

export async function fetchAllarticles(): Promise<Array<article>> {
    try {
        const response = await fetch(ALL_POST)
        const result = await response.json()
        const posts: Array<article> = result.map((each: any) => ({
            title: each.title,
            description: each.description,
            id: each.id,
            createdTime: new Date(each.created_time),
            imageUrl: each.headimg,
        }))
        return posts
    }
    catch (e) {
        throw e
    }

}