import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

//Game Category
export interface gameCategoryInterface {
    context: string,
    url: string,
    category: {
        context: string,
        url: string,
        tag?: string
    }[]
}

export interface submenuInterface {

    context: string,
    url: string,
    tag?: string

}
//Navigation
//Navbar
export interface navBarInterface {
    context: string,
    url: string,
    submenu?: submenuInterface[],

    gameCategory?: gameCategoryInterface[]
}
//Features
export interface featuresOptionInterface {
    name: string,
    iconURL: IconDefinition
}

export interface featuredGameInterface {
    name: string,
    category: string[],
    image: string,
    description: string,
    tag?: string
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