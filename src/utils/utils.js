import moment from "moment";

const changeTime = time =>
    moment(time)
        .startOf("minute")
        .fromNow()
        .replace(/hours?/, "小时")
        .replace("ago", "前")
        .replace(/days?/, "天")
        .replace(/minutes?/, "分钟")
        .replace(/\ban?/, "1")
        .replace(/months?/, "个月")
        .replace(/\byears?/, "年")
        .replace(/\s/g, "")
        .replace("fewseconds", "分钟");


export default changeTime;