// Topic
export { Topic } from './models/topic/topic'
export { TopicMedia } from './models/topic/topic-media'
export type { TopicModel } from './models/topic/model'
export type { TopicData } from './models/topic/data'
export type { TopicNcssTree } from './models/topic/ncss-tree'

// Topic section
export { TopicSection } from './models/topic-section/topic-section'
export type { TopicSectionModel } from './models/topic-section/model'
export type { TopicSectionData } from './models/topic-section/data'
export type { TopicSectionNcssTree } from './models/topic-section/ncss-tree'

// Topic lib
export { getTopicInfo } from './lib/get-topic-info'
export type { TopicInfo } from './lib/get-topic-info'
export type { TopicOptions, TopicOptionString } from './lib/get-topic-options'
export { topicOptionsEnglish, topicOptionsDutch } from './lib/get-topic-options'
export { getEmptyTopicOptions, getTopicOptions } from './lib/get-topic-options'

// Topic config
export { topicModelConfig } from './config/topic-model-config'
