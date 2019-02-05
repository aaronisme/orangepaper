import { article } from '../../models/article'

const ALL_POST = 'https://orange.xyz/api/getallarticle'
const ONE_POST = 'https://orange.xyz/api/p/'

export async function fetchAllarticles(): Promise<Array<article>> {
    try {
        const response = await fetch(ALL_POST)
        const result = await response.json()
        const posts: Array<article> = result.map((each: any) => ({
            title: each.title,
            description: each.description,
            id: each.id,
            createdTime: new Date(each.created_time),
            imageUrl: processImageUrl(each.headimg.trim()),
        }))
        return posts
    }
    catch (e) {
        throw e
    }
}

export async function fetchArticle(id: number) : Promise<string> {
    try {
        const response = await fetch(`${ONE_POST}${id}`)
        const result = await response.json()
        return result.content
    }
    catch (e) {
        throw e
    }
}

const processImageUrl = (input: string): string => {
    const urlPrefix = /^http/g
    if(urlPrefix.test(input)){
        return input
    }

    const staticPrefix = /^\/static/g
    if(staticPrefix.test(input)){
        return `https://orange.xyz${input}`
    }

    return 'https://orange.xyz/static/navbar/logo.png'
}