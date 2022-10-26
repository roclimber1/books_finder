


export interface VolumeInfo {
    title: string
    authors: Array<string>
    description: string
    imageLinks: {
        smallThumbnail: string
        thumbnail: string
    }
    publishedDate: string
    subtitle: string
}


export interface Book {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
}


export interface GetListResults {
    kind: string
    items: Array<Book>
    totalItems: number
}
