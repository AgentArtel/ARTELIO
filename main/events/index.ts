import { RpgModule } from '@rpgjs/server'
import ArtistEvent from './artist'
import MentorEvent from './mentor'
import ShopkeeperEvent from './shopkeeper'
import VillagerEvent from './villager'
import PhotographerEvent from './photographer'
import QuestGiverEvent from './quest-giver'

export default {
    events: [
        ArtistEvent,
        VillagerEvent,
        ShopkeeperEvent,
        MentorEvent,
        PhotographerEvent,
        QuestGiverEvent
    ]
} as RpgModule
