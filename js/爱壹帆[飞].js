muban.mxone5.二级.desc = '.title-info&&Text;.tag-link:eq(2)&&Text;.tag-link:eq(3)&&Text;;';
var rule={
	title:'爱壹帆[飞]',
	模板:'mxone5',
	host:'https://www.iyf.tv',
	// url:'/index.php/vod/show/id/fyclass/page/fypage.html',
	url:'/index.php/vod/show/id/fyfilter.html',
	searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
	class_parse:'.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
    lazy:`js:
        var html = JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);
        var url = html.url;
        if (html.encrypt == '1') {
            url = unescape(url)
        } else if (html.encrypt == '2') {
            url = unescape(base64Decode(url))
        }
        if (/m3u8|mp4/.test(url)) {
            input = url
        } else {
            input
        }
    `,
}
