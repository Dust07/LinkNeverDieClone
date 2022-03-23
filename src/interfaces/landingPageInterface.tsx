import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

//Game Category

export interface submenuInterface {
    context: string,
    url: string,
    tag?: string
}

export interface categoryInterface {
    context: string,
    url: string,
    submenu: submenuInterface[]
}

//Navigation
//Navbar
export interface navBarInterface {
    context: string,
    url: string,
    category: categoryInterface[] | null
}
//Features
export interface featuresOptionInterface {
    name: string,
    iconURL: IconDefinition
}

export interface gamesInterface {
    name: string,
    category: string[],
    image: string,
    description: string,
    tag?: string
}

export interface filmsInterface {
    name: string,
    vietSubName: string,
    category: string[],
    image: string,
    description: string,
    trailer?: string,
    country?: string,
    imdb?: number,
    rating?: number,
    uploadDate?: Date,

}
//Footer
export interface contactOptionInterface {
    icon: IconDefinition,
    context: string | number,
}

export interface socialLinksInterface {
    icon: IconDefinition,
    context: string
}

export interface forumPost {
    title: string,
    user: {
        avatar: string,
        id: string
    },
    category: string,
    viewCount: number,
    answerCount: number,
    time?: Date
}