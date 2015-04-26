/**
 * Created by bruceXie on 2015/4/23.
 * fileUrl: your file realUrl
 * type: your file is JavaScript the type equal 1,
 *       your file is Css the type equal 0
 * baseVersion is changed when you apply a new project
 */
function AppendVersion(fileUrl, type){
	var baseVersion = 001;
    var baseJsHead = '<script src=', baseJsTail='></script>', baseCssHead = '<link rel="stylesheet" href=', baseCssTail='>';
    return 0 == type ? baseCssHead+fileUrl+"?ver="+baseVersion+baseCssTail : baseJsHead+fileUrl+"?ver="+baseVersion+baseJsTail;
}