interface EmbedModel {
  fields: {
    code?: string
    type?: 'html' | 'js-app' | 'js-page' | 'js-action' | 'js-page-section'
    title: string
  }
  model: 'embed'
}
interface MediaBreakpointModel {
  fields: {
    small?: boolean
    medium?: boolean
    large?: boolean
    extraLarge?: boolean
    title: string
  }
  model: 'mediaBreakpoint'
}
interface TopicModel {
  fields: {
    heading?: string
    abstract?: string
    media?: boolean
    icon?: 'activity' | 'airplay' | 'alert-circle' | 'alert-octagon' | 'alert-triangle' | 'align-center' | 'align-justify' | 'align-left' | 'align-right' | 'anchor' | 'aperture' | 'archive' | 'arrow-down-circle' | 'arrow-down-left' | 'arrow-down-right' | 'arrow-down' | 'arrow-left-circle' | 'arrow-left' | 'arrow-right-circle' | 'arrow-right' | 'arrow-up-circle' | 'arrow-up-left' | 'arrow-up-right' | 'arrow-up' | 'at-sign' | 'award' | 'bar-chart-2' | 'bar-chart' | 'battery-charging' | 'battery' | 'bell-off' | 'bell' | 'bluetooth' | 'bold' | 'book-open' | 'book' | 'bookmark' | 'box' | 'briefcase' | 'calendar' | 'camera-off' | 'camera' | 'cast' | 'check-circle' | 'check-square' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevrons-down' | 'chevrons-left' | 'chevrons-right' | 'chevrons-up' | 'chrome' | 'circle' | 'clipboard' | 'clock' | 'cloud-drizzle' | 'cloud-lightning' | 'cloud-off' | 'cloud-rain' | 'cloud-snow' | 'cloud' | 'code' | 'codepen' | 'codesandbox' | 'coffee' | 'columns' | 'command' | 'compass' | 'copy' | 'corner-down-left' | 'corner-down-right' | 'corner-left-down' | 'corner-left-up' | 'corner-right-down' | 'corner-right-up' | 'corner-up-left' | 'corner-up-right' | 'cpu' | 'credit-card' | 'crop' | 'crosshair' | 'database' | 'delete' | 'disc' | 'dollar-sign' | 'download-cloud' | 'download' | 'droplet' | 'edit-2' | 'edit-3' | 'edit' | 'external-link' | 'eye-off' | 'eye' | 'facebook' | 'fast-forward' | 'feather' | 'figma' | 'file-minus' | 'file-plus' | 'file-text' | 'file' | 'film' | 'filter' | 'flag' | 'folder-minus' | 'folder-plus' | 'folder' | 'framer' | 'frown' | 'gift' | 'git-branch' | 'git-commit' | 'git-merge' | 'git-pull-request' | 'github' | 'gitlab' | 'globe' | 'grid' | 'hard-drive' | 'hash' | 'headphones' | 'heart' | 'help-circle' | 'hexagon' | 'home' | 'image' | 'inbox' | 'info' | 'instagram' | 'italic' | 'key' | 'layers' | 'layout' | 'life-buoy' | 'link-2' | 'link' | 'linkedin' | 'list' | 'loader' | 'lock' | 'log-in' | 'log-out' | 'mail' | 'map-pin' | 'map' | 'maximize-2' | 'maximize' | 'meh' | 'menu' | 'message-circle' | 'message-square' | 'mic-off' | 'mic' | 'minimize-2' | 'minimize' | 'minus-circle' | 'minus-square' | 'minus' | 'monitor' | 'moon' | 'more-horizontal' | 'more-vertical' | 'mouse-pointer' | 'move' | 'music' | 'navigation-2' | 'navigation' | 'octagon' | 'package' | 'paperclip' | 'pause-circle' | 'pause' | 'pen-tool' | 'percent' | 'phone-call' | 'phone-forwarded' | 'phone-incoming' | 'phone-missed' | 'phone-off' | 'phone-outgoing' | 'phone' | 'pie-chart' | 'play-circle' | 'play' | 'plus-circle' | 'plus-square' | 'plus' | 'pocket' | 'power' | 'printer' | 'radio' | 'refresh-ccw' | 'refresh-cw' | 'repeat' | 'rewind' | 'rotate-ccw' | 'rotate-cw' | 'rss' | 'save' | 'scissors' | 'search' | 'send' | 'server' | 'settings' | 'share-2' | 'share' | 'shield-off' | 'shield' | 'shopping-bag' | 'shopping-cart' | 'shuffle' | 'sidebar' | 'skip-back' | 'skip-forward' | 'slack' | 'slash' | 'sliders' | 'smartphone' | 'smile' | 'speaker' | 'square' | 'star' | 'stop-circle' | 'sun' | 'sunrise' | 'sunset' | 'tablet' | 'tag' | 'target' | 'terminal' | 'thermometer' | 'thumbs-down' | 'thumbs-up' | 'toggle-left' | 'toggle-right' | 'tool' | 'trash-2' | 'trash' | 'trello' | 'trending-down' | 'trending-up' | 'triangle' | 'truck' | 'tv' | 'twitch' | 'twitter' | 'type' | 'umbrella' | 'underline' | 'unlock' | 'upload-cloud' | 'upload' | 'user-check' | 'user-minus' | 'user-plus' | 'user-x' | 'user' | 'users' | 'video-off' | 'video' | 'voicemail' | 'volume-1' | 'volume-2' | 'volume-x' | 'volume' | 'watch' | 'wifi-off' | 'wifi' | 'wind' | 'x-circle' | 'x-octagon' | 'x-square' | 'x' | 'youtube' | 'zap-off' | 'zap' | 'zoom-in' | 'zoom-out'
    actions?: Array<'brandAction' | 'getStarted' | 'goFreeForEveryone' | 'goHome' | 'goNonprofit' | 'goOpenSource'>
    advancedMedia?: Array<'advancedMedia'>
    title: string
  }
  model: 'topic'
}
interface TopicTableModel {
  fields: {
    heading?: string
    abstract?: string
    media?: boolean
    icon?: 'activity' | 'airplay' | 'alert-circle' | 'alert-octagon' | 'alert-triangle' | 'align-center' | 'align-justify' | 'align-left' | 'align-right' | 'anchor' | 'aperture' | 'archive' | 'arrow-down-circle' | 'arrow-down-left' | 'arrow-down-right' | 'arrow-down' | 'arrow-left-circle' | 'arrow-left' | 'arrow-right-circle' | 'arrow-right' | 'arrow-up-circle' | 'arrow-up-left' | 'arrow-up-right' | 'arrow-up' | 'at-sign' | 'award' | 'bar-chart-2' | 'bar-chart' | 'battery-charging' | 'battery' | 'bell-off' | 'bell' | 'bluetooth' | 'bold' | 'book-open' | 'book' | 'bookmark' | 'box' | 'briefcase' | 'calendar' | 'camera-off' | 'camera' | 'cast' | 'check-circle' | 'check-square' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevrons-down' | 'chevrons-left' | 'chevrons-right' | 'chevrons-up' | 'chrome' | 'circle' | 'clipboard' | 'clock' | 'cloud-drizzle' | 'cloud-lightning' | 'cloud-off' | 'cloud-rain' | 'cloud-snow' | 'cloud' | 'code' | 'codepen' | 'codesandbox' | 'coffee' | 'columns' | 'command' | 'compass' | 'copy' | 'corner-down-left' | 'corner-down-right' | 'corner-left-down' | 'corner-left-up' | 'corner-right-down' | 'corner-right-up' | 'corner-up-left' | 'corner-up-right' | 'cpu' | 'credit-card' | 'crop' | 'crosshair' | 'database' | 'delete' | 'disc' | 'dollar-sign' | 'download-cloud' | 'download' | 'droplet' | 'edit-2' | 'edit-3' | 'edit' | 'external-link' | 'eye-off' | 'eye' | 'facebook' | 'fast-forward' | 'feather' | 'figma' | 'file-minus' | 'file-plus' | 'file-text' | 'file' | 'film' | 'filter' | 'flag' | 'folder-minus' | 'folder-plus' | 'folder' | 'framer' | 'frown' | 'gift' | 'git-branch' | 'git-commit' | 'git-merge' | 'git-pull-request' | 'github' | 'gitlab' | 'globe' | 'grid' | 'hard-drive' | 'hash' | 'headphones' | 'heart' | 'help-circle' | 'hexagon' | 'home' | 'image' | 'inbox' | 'info' | 'instagram' | 'italic' | 'key' | 'layers' | 'layout' | 'life-buoy' | 'link-2' | 'link' | 'linkedin' | 'list' | 'loader' | 'lock' | 'log-in' | 'log-out' | 'mail' | 'map-pin' | 'map' | 'maximize-2' | 'maximize' | 'meh' | 'menu' | 'message-circle' | 'message-square' | 'mic-off' | 'mic' | 'minimize-2' | 'minimize' | 'minus-circle' | 'minus-square' | 'minus' | 'monitor' | 'moon' | 'more-horizontal' | 'more-vertical' | 'mouse-pointer' | 'move' | 'music' | 'navigation-2' | 'navigation' | 'octagon' | 'package' | 'paperclip' | 'pause-circle' | 'pause' | 'pen-tool' | 'percent' | 'phone-call' | 'phone-forwarded' | 'phone-incoming' | 'phone-missed' | 'phone-off' | 'phone-outgoing' | 'phone' | 'pie-chart' | 'play-circle' | 'play' | 'plus-circle' | 'plus-square' | 'plus' | 'pocket' | 'power' | 'printer' | 'radio' | 'refresh-ccw' | 'refresh-cw' | 'repeat' | 'rewind' | 'rotate-ccw' | 'rotate-cw' | 'rss' | 'save' | 'scissors' | 'search' | 'send' | 'server' | 'settings' | 'share-2' | 'share' | 'shield-off' | 'shield' | 'shopping-bag' | 'shopping-cart' | 'shuffle' | 'sidebar' | 'skip-back' | 'skip-forward' | 'slack' | 'slash' | 'sliders' | 'smartphone' | 'smile' | 'speaker' | 'square' | 'star' | 'stop-circle' | 'sun' | 'sunrise' | 'sunset' | 'tablet' | 'tag' | 'target' | 'terminal' | 'thermometer' | 'thumbs-down' | 'thumbs-up' | 'toggle-left' | 'toggle-right' | 'tool' | 'trash-2' | 'trash' | 'trello' | 'trending-down' | 'trending-up' | 'triangle' | 'truck' | 'tv' | 'twitch' | 'twitter' | 'type' | 'umbrella' | 'underline' | 'unlock' | 'upload-cloud' | 'upload' | 'user-check' | 'user-minus' | 'user-plus' | 'user-x' | 'user' | 'users' | 'video-off' | 'video' | 'voicemail' | 'volume-1' | 'volume-2' | 'volume-x' | 'volume' | 'watch' | 'wifi-off' | 'wifi' | 'wind' | 'x-circle' | 'x-octagon' | 'x-square' | 'x' | 'youtube' | 'zap-off' | 'zap' | 'zoom-in' | 'zoom-out'
    actions?: Array<'brandAction' | 'getStarted' | 'goFreeForEveryone' | 'goHome' | 'goNonprofit' | 'goOpenSource'>
    rows?: string[]
    advancedMedia?: Array<'advancedMedia'>
    title: string
  }
  model: 'topicTable'
}
interface TopicRowModel {
  fields: {
    heading?: string
    abstract?: string
    media?: boolean
    icon?: 'activity' | 'airplay' | 'alert-circle' | 'alert-octagon' | 'alert-triangle' | 'align-center' | 'align-justify' | 'align-left' | 'align-right' | 'anchor' | 'aperture' | 'archive' | 'arrow-down-circle' | 'arrow-down-left' | 'arrow-down-right' | 'arrow-down' | 'arrow-left-circle' | 'arrow-left' | 'arrow-right-circle' | 'arrow-right' | 'arrow-up-circle' | 'arrow-up-left' | 'arrow-up-right' | 'arrow-up' | 'at-sign' | 'award' | 'bar-chart-2' | 'bar-chart' | 'battery-charging' | 'battery' | 'bell-off' | 'bell' | 'bluetooth' | 'bold' | 'book-open' | 'book' | 'bookmark' | 'box' | 'briefcase' | 'calendar' | 'camera-off' | 'camera' | 'cast' | 'check-circle' | 'check-square' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevrons-down' | 'chevrons-left' | 'chevrons-right' | 'chevrons-up' | 'chrome' | 'circle' | 'clipboard' | 'clock' | 'cloud-drizzle' | 'cloud-lightning' | 'cloud-off' | 'cloud-rain' | 'cloud-snow' | 'cloud' | 'code' | 'codepen' | 'codesandbox' | 'coffee' | 'columns' | 'command' | 'compass' | 'copy' | 'corner-down-left' | 'corner-down-right' | 'corner-left-down' | 'corner-left-up' | 'corner-right-down' | 'corner-right-up' | 'corner-up-left' | 'corner-up-right' | 'cpu' | 'credit-card' | 'crop' | 'crosshair' | 'database' | 'delete' | 'disc' | 'dollar-sign' | 'download-cloud' | 'download' | 'droplet' | 'edit-2' | 'edit-3' | 'edit' | 'external-link' | 'eye-off' | 'eye' | 'facebook' | 'fast-forward' | 'feather' | 'figma' | 'file-minus' | 'file-plus' | 'file-text' | 'file' | 'film' | 'filter' | 'flag' | 'folder-minus' | 'folder-plus' | 'folder' | 'framer' | 'frown' | 'gift' | 'git-branch' | 'git-commit' | 'git-merge' | 'git-pull-request' | 'github' | 'gitlab' | 'globe' | 'grid' | 'hard-drive' | 'hash' | 'headphones' | 'heart' | 'help-circle' | 'hexagon' | 'home' | 'image' | 'inbox' | 'info' | 'instagram' | 'italic' | 'key' | 'layers' | 'layout' | 'life-buoy' | 'link-2' | 'link' | 'linkedin' | 'list' | 'loader' | 'lock' | 'log-in' | 'log-out' | 'mail' | 'map-pin' | 'map' | 'maximize-2' | 'maximize' | 'meh' | 'menu' | 'message-circle' | 'message-square' | 'mic-off' | 'mic' | 'minimize-2' | 'minimize' | 'minus-circle' | 'minus-square' | 'minus' | 'monitor' | 'moon' | 'more-horizontal' | 'more-vertical' | 'mouse-pointer' | 'move' | 'music' | 'navigation-2' | 'navigation' | 'octagon' | 'package' | 'paperclip' | 'pause-circle' | 'pause' | 'pen-tool' | 'percent' | 'phone-call' | 'phone-forwarded' | 'phone-incoming' | 'phone-missed' | 'phone-off' | 'phone-outgoing' | 'phone' | 'pie-chart' | 'play-circle' | 'play' | 'plus-circle' | 'plus-square' | 'plus' | 'pocket' | 'power' | 'printer' | 'radio' | 'refresh-ccw' | 'refresh-cw' | 'repeat' | 'rewind' | 'rotate-ccw' | 'rotate-cw' | 'rss' | 'save' | 'scissors' | 'search' | 'send' | 'server' | 'settings' | 'share-2' | 'share' | 'shield-off' | 'shield' | 'shopping-bag' | 'shopping-cart' | 'shuffle' | 'sidebar' | 'skip-back' | 'skip-forward' | 'slack' | 'slash' | 'sliders' | 'smartphone' | 'smile' | 'speaker' | 'square' | 'star' | 'stop-circle' | 'sun' | 'sunrise' | 'sunset' | 'tablet' | 'tag' | 'target' | 'terminal' | 'thermometer' | 'thumbs-down' | 'thumbs-up' | 'toggle-left' | 'toggle-right' | 'tool' | 'trash-2' | 'trash' | 'trello' | 'trending-down' | 'trending-up' | 'triangle' | 'truck' | 'tv' | 'twitch' | 'twitter' | 'type' | 'umbrella' | 'underline' | 'unlock' | 'upload-cloud' | 'upload' | 'user-check' | 'user-minus' | 'user-plus' | 'user-x' | 'user' | 'users' | 'video-off' | 'video' | 'voicemail' | 'volume-1' | 'volume-2' | 'volume-x' | 'volume' | 'watch' | 'wifi-off' | 'wifi' | 'wind' | 'x-circle' | 'x-octagon' | 'x-square' | 'x' | 'youtube' | 'zap-off' | 'zap' | 'zoom-in' | 'zoom-out'
    actions?: Array<'brandAction' | 'getStarted' | 'goFreeForEveryone' | 'goHome' | 'goNonprofit' | 'goOpenSource'>
    topics?: Array<'freeForEveryoneTopic' | 'githubProfileTopic' | 'myGreatBlogProfile' | 'nonprofitTopic' | 'openSourceTopic' | 'wheelroomConnectsTopic'>
    advancedMedia?: Array<'advancedMedia'>
    title: string
  }
  model: 'topicRow'
}
interface ActionModel {
  fields: {
    heading?: string
    description?: string
    icon?: 'activity' | 'airplay' | 'alert-circle' | 'alert-octagon' | 'alert-triangle' | 'align-center' | 'align-justify' | 'align-left' | 'align-right' | 'anchor' | 'aperture' | 'archive' | 'arrow-down-circle' | 'arrow-down-left' | 'arrow-down-right' | 'arrow-down' | 'arrow-left-circle' | 'arrow-left' | 'arrow-right-circle' | 'arrow-right' | 'arrow-up-circle' | 'arrow-up-left' | 'arrow-up-right' | 'arrow-up' | 'at-sign' | 'award' | 'bar-chart-2' | 'bar-chart' | 'battery-charging' | 'battery' | 'bell-off' | 'bell' | 'bluetooth' | 'bold' | 'book-open' | 'book' | 'bookmark' | 'box' | 'briefcase' | 'calendar' | 'camera-off' | 'camera' | 'cast' | 'check-circle' | 'check-square' | 'check' | 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'chevrons-down' | 'chevrons-left' | 'chevrons-right' | 'chevrons-up' | 'chrome' | 'circle' | 'clipboard' | 'clock' | 'cloud-drizzle' | 'cloud-lightning' | 'cloud-off' | 'cloud-rain' | 'cloud-snow' | 'cloud' | 'code' | 'codepen' | 'codesandbox' | 'coffee' | 'columns' | 'command' | 'compass' | 'copy' | 'corner-down-left' | 'corner-down-right' | 'corner-left-down' | 'corner-left-up' | 'corner-right-down' | 'corner-right-up' | 'corner-up-left' | 'corner-up-right' | 'cpu' | 'credit-card' | 'crop' | 'crosshair' | 'database' | 'delete' | 'disc' | 'dollar-sign' | 'download-cloud' | 'download' | 'droplet' | 'edit-2' | 'edit-3' | 'edit' | 'external-link' | 'eye-off' | 'eye' | 'facebook' | 'fast-forward' | 'feather' | 'figma' | 'file-minus' | 'file-plus' | 'file-text' | 'file' | 'film' | 'filter' | 'flag' | 'folder-minus' | 'folder-plus' | 'folder' | 'framer' | 'frown' | 'gift' | 'git-branch' | 'git-commit' | 'git-merge' | 'git-pull-request' | 'github' | 'gitlab' | 'globe' | 'grid' | 'hard-drive' | 'hash' | 'headphones' | 'heart' | 'help-circle' | 'hexagon' | 'home' | 'image' | 'inbox' | 'info' | 'instagram' | 'italic' | 'key' | 'layers' | 'layout' | 'life-buoy' | 'link-2' | 'link' | 'linkedin' | 'list' | 'loader' | 'lock' | 'log-in' | 'log-out' | 'mail' | 'map-pin' | 'map' | 'maximize-2' | 'maximize' | 'meh' | 'menu' | 'message-circle' | 'message-square' | 'mic-off' | 'mic' | 'minimize-2' | 'minimize' | 'minus-circle' | 'minus-square' | 'minus' | 'monitor' | 'moon' | 'more-horizontal' | 'more-vertical' | 'mouse-pointer' | 'move' | 'music' | 'navigation-2' | 'navigation' | 'octagon' | 'package' | 'paperclip' | 'pause-circle' | 'pause' | 'pen-tool' | 'percent' | 'phone-call' | 'phone-forwarded' | 'phone-incoming' | 'phone-missed' | 'phone-off' | 'phone-outgoing' | 'phone' | 'pie-chart' | 'play-circle' | 'play' | 'plus-circle' | 'plus-square' | 'plus' | 'pocket' | 'power' | 'printer' | 'radio' | 'refresh-ccw' | 'refresh-cw' | 'repeat' | 'rewind' | 'rotate-ccw' | 'rotate-cw' | 'rss' | 'save' | 'scissors' | 'search' | 'send' | 'server' | 'settings' | 'share-2' | 'share' | 'shield-off' | 'shield' | 'shopping-bag' | 'shopping-cart' | 'shuffle' | 'sidebar' | 'skip-back' | 'skip-forward' | 'slack' | 'slash' | 'sliders' | 'smartphone' | 'smile' | 'speaker' | 'square' | 'star' | 'stop-circle' | 'sun' | 'sunrise' | 'sunset' | 'tablet' | 'tag' | 'target' | 'terminal' | 'thermometer' | 'thumbs-down' | 'thumbs-up' | 'toggle-left' | 'toggle-right' | 'tool' | 'trash-2' | 'trash' | 'trello' | 'trending-down' | 'trending-up' | 'triangle' | 'truck' | 'tv' | 'twitch' | 'twitter' | 'type' | 'umbrella' | 'underline' | 'unlock' | 'upload-cloud' | 'upload' | 'user-check' | 'user-minus' | 'user-plus' | 'user-x' | 'user' | 'users' | 'video-off' | 'video' | 'voicemail' | 'volume-1' | 'volume-2' | 'volume-x' | 'volume' | 'watch' | 'wifi-off' | 'wifi' | 'wind' | 'x-circle' | 'x-octagon' | 'x-square' | 'x' | 'youtube' | 'zap-off' | 'zap' | 'zoom-in' | 'zoom-out'
    page?: 'blogPage' | 'freeForEveryonePage' | 'homePage' | 'nonprofitPage' | 'openSourcePage'
    url?: string
    anchor?: string
    query?: string
    eventId?: string
    title: string
  }
  model: 'action'
}
interface NavigationSegmentModel {
  fields: {
    heading?: string
    actions?: Array<'brandAction' | 'getStarted' | 'goFreeForEveryone' | 'goHome' | 'goNonprofit' | 'goOpenSource'>
    title: string
  }
  model: 'navigationSegment'
}
interface NavigationModel {
  fields: {
    segments?: Array<'footerNavigationSegment' | 'headerNavigationSegment'>
    skipToContentHeading?: string
    brandAction?: 'brandAction' | 'getStarted' | 'goFreeForEveryone' | 'goHome' | 'goNonprofit' | 'goOpenSource'
    title: string
  }
  model: 'navigation'
}
interface TextModel {
  fields: {
    text: string
    title: string
  }
  model: 'text'
}
interface PageSectionModel {
  fields: {
    variation?: 'block-wr' | 'blog-wr' | 'blog-list-wr' | 'card-wr' | 'divider-wr' | 'featured-wr' | 'gallery-wr' | 'headline-wr' | 'hero-wr' | 'image-wr' | 'navigation-wr' | 'price-table-wr' | 'quote-wr' | 'showcase-wr' | 'text-wr' | 'video-wr'
    topics?: Array<'freeForEveryoneTopic' | 'githubProfileTopic' | 'myGreatBlogProfile' | 'nonprofitTopic' | 'openSourceTopic' | 'wheelroomConnectsTopic'>
    topicOptions?: Array<'Hide icon' | 'Hide media' | 'Hide heading' | 'Hide abstract' | 'Hide action' | 'Reversed order'>
    text?: 'starterText'
    topicTables?: string[]
    navigation?: Array<'footerNavigation' | 'headerNavigation'>
    actions?: Array<'brandAction' | 'getStarted' | 'goFreeForEveryone' | 'goHome' | 'goNonprofit' | 'goOpenSource'>
    eventId?: string
    title: string
  }
  model: 'pageSection'
}
interface PageModel {
  fields: {
    path: string
    sections: Array<'siteFooterSection' | 'siteHeaderSection' | 'starterBlockSection' | 'starterBlogSection' | 'starterCardSection' | 'starterFeaturedSection' | 'starterHeadlineSection' | 'starterHeroSection' | 'starterQuoteSection' | 'starterShowcaseSection' | 'starterTextSection'>
    theme?: 'light' | 'dark'
    seoTitle?: string
    seoDescription?: string
    seoImage?: boolean
    seoKeywords?: string[]
    title: string
  }
  model: 'page'
}
interface BlogModel {
  fields: {
    slug: string
    date?: string
    text: string
    labels?: Array<'freeForEveryoneTopic' | 'githubProfileTopic' | 'myGreatBlogProfile' | 'nonprofitTopic' | 'openSourceTopic' | 'wheelroomConnectsTopic'>
    topics: Array<'freeForEveryoneTopic' | 'githubProfileTopic' | 'myGreatBlogProfile' | 'nonprofitTopic' | 'openSourceTopic' | 'wheelroomConnectsTopic'>
    authors?: Array<'freeForEveryoneTopic' | 'githubProfileTopic' | 'myGreatBlogProfile' | 'nonprofitTopic' | 'openSourceTopic' | 'wheelroomConnectsTopic'>
    seoTitle?: string
    seoDescription?: string
    seoImage?: boolean
    seoKeywords?: string[]
    title: string
  }
  model: 'blog'
}
interface DocModel {
  fields: {
    slug: string
    text: string
    parent?: string[]
    next?: string[]
    title: string
  }
  model: 'doc'
}
interface GlobalsModel {
  fields: {
    siteAuthor?: string
    siteDescription?: string
    siteHeading?: string
    siteKeywords?: string[]
    siteEmbeds?: string[]
    title: string
  }
  model: 'globals'
}
type Model =
  | EmbedModel
  | MediaBreakpointModel
  | TopicModel
  | TopicTableModel
  | TopicRowModel
  | ActionModel
  | NavigationSegmentModel
  | NavigationModel
  | TextModel
  | PageSectionModel
  | PageModel
  | BlogModel
  | DocModel
  | GlobalsModel

export interface ContentTypes {
  [componentId: string]: Model
}
