export interface BookModel {
    id: number,
    title: string,
    author: string,
    image: string
}

export interface WordModel {
    id: number,
    word: string,
    description: string
}

export default interface Data {
    books: BookModel[],
    words: WordModel[]
}