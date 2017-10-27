
/**
 * 全局正则验证
 */
const COMMON_REGEX = {
    'username':/[\d|\w]{6,16}$/,
    'pwd':/[A-z][0-9]{6,}/g,
    'email':/[A-z][0-9]+\@\w+\.com{1}/
}


export {COMMON_REGEX}