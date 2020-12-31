const videoSites = [
	{
	  from: /<a href.*youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]*).*<\/a>/g, // youtube
	  to: `//www.youtube.com/embed/$1`
	},
	{
	  from: /<a href.*youtu(?:.*\/v\/|.*list\=|\.be\/)([A-Za-z0-9_\-]*).*<\/a>/g, // youtubeList
	  to: `//www.youtube.com/embed/?list=$1`
	},
	{
	  from: /<a href.*[v|m]\.youku.com\/v_show\/id_([A-Za-z0-9_\-]*)==\.html(\?.*)?".*<\/a>/g, // youku
	  to: `http://player.youku.com/embed/$1`
	},
	{
	  from: /<a href="(?:https?:\/\/)?open\.iqiyi\.com\/developer\/player_js\/coopPlayerIndex\.html\?vid=(.*?)\s.*?">.+<\/a>/g, // iqiyi
	  to: `http://open.iqiyi.com/developer/player_js/coopPlayerIndex.html?vid=$1`
	},
	{
	  from: /<a href="(?:https?:\/\/)?(?:www\.)?bilibili\.(?:tv|com)\/video\/([A-Za-z0-9_\-]*).*?">.+<\/a>/g, // bili
	  to: `//player.bilibili.com/player.html?bvid=$1`
	},
	{
	  from: /<a href="(?:https?:\/\/)?(?:www\.)?b23\.(?:tv|com)\/([A-Za-z0-9_\-]*).*?">.+<\/a>/g, // b23
	  to: `//player.bilibili.com/player.html?bvid=$1`
	},
]

module.exports = { videoSites }