export class Anime {

    pagination!: {
        last_visible_page: number,
        has_next_page: boolean, 
        current_page: number, 
        items: {
            count: number, 
            total: number, 
            per_page: number
        }
    };
    data!:[
        {
            mal_id: number, 
            url: string, 
            images: {
                jpg: {
                    image_url: string
                }, 
                webp: {
                    image_url: string, 
                    small_image_url: string
                }
            }, 
            name: string, 
            name_kanji: string, 
            nicknames: [], 
            favourites: number, 
            about: string
        }
    ]
}
