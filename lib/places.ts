export type Category = "海边自然" | "城市地标" | "人文艺术" | "特色街区";

export type Place = {
  id: string; name: string; district: string; category: Category;
  lng: number; lat: number; duration: string; bestTime: string; metro: string;
  summary: string; highlights: string[]; tips: string; cover?: string; credit?: string; sourceUrl?: string;
};

export const places: Place[] = [
  { id:"dameisha", name:"大梅沙海滨公园", district:"盐田区", category:"海边自然", lng:114.3078, lat:22.5955, duration:"3–5 小时", bestTime:"下午至日落", metro:"大梅沙站", summary:"沙滩、海风和开阔山海景观，是轻松感受深圳海岸线的经典选择。", highlights:["沙滩散步","看海与日落","海滨休闲"], tips:"节假日客流较大；是否适合下水需临近出发时结合天气和现场提示确认。", cover:"/images/dameisha-beach.jpg", credit:"Nkon21 · CC BY-SA 4.0", sourceUrl:"https://commons.wikimedia.org/wiki/File:Dameisha_Beach_230530_(1).jpg" },
  { id:"yantian-boardwalk", name:"盐田海滨栈道", district:"盐田区", category:"海边自然", lng:114.266, lat:22.586, duration:"2–3 小时", bestTime:"清晨或傍晚", metro:"海山站 / 盐田港西站", summary:"沿着盐田海岸慢慢走，在城市、港口与海之间切换视角。", highlights:["海岸步行","山海视野","轻量徒步"], tips:"栈道分段较长，实际开放路段可能受天气和维护影响。" },
  { id:"xiaomeisha", name:"小梅沙", district:"盐田区", category:"海边自然", lng:114.3301, lat:22.5984, duration:"3–5 小时", bestTime:"上午至下午", metro:"小梅沙站", summary:"紧邻大梅沙的海滨区域，适合与盐田东部景点放在同一组比较。", highlights:["海滨景观","休闲体验","亲水活动"], tips:"部分项目可能收费，具体开放和票务信息出发前复核。" },
  { id:"zhongying-street", name:"中英街", district:"盐田区", category:"特色街区", lng:114.237, lat:22.545, duration:"2–3 小时", bestTime:"上午或午后", metro:"沙头角站", summary:"具有特殊边界历史的街区，适合了解盐田与深港关系。", highlights:["边界历史","老街漫游","城市记忆"], tips:"通常涉及预约或证件要求，出发前查看官方最新规定。" },
  { id:"dapeng-fortress", name:"大鹏所城", district:"大鹏新区", category:"人文艺术", lng:114.4964, lat:22.5964, duration:"2–3 小时", bestTime:"上午或傍晚", metro:"建议公交或打车", summary:"保存较完整的海防古城格局，街巷、城门和生活气息都值得慢看。", highlights:["古城街巷","海防历史","人文摄影"], tips:"可与较场尾组合，但从深圳中心区往返时间较长。", cover:"/images/dapeng-fortress.jpg", credit:"Dinkun Chen · CC BY-SA 4.0", sourceUrl:"https://commons.wikimedia.org/wiki/File:Dapeng_Fortress,_Shenzhen.jpg" },
  { id:"jiaochangwei", name:"较场尾", district:"大鹏新区", category:"海边自然", lng:114.503, lat:22.586, duration:"2–3 小时", bestTime:"下午至夜间", metro:"建议公交或打车", summary:"靠近大鹏所城的海边街区，咖啡、散步和轻松停留比赶景点更合适。", highlights:["海边街区","咖啡小店","慢节奏"], tips:"周末住宿区和道路可能拥挤，适合与大鹏所城步行串联。" },
  { id:"yangmeikeng", name:"杨梅坑", district:"大鹏新区", category:"海边自然", lng:114.604, lat:22.545, duration:"半天", bestTime:"天气稳定的白天", metro:"建议公交或打车", summary:"东部山海景观突出，适合海岸骑行、散步和较长时间停留。", highlights:["山海公路","骑行","海岸风景"], tips:"距离市区较远，天气和交通会显著影响体验。" },
  { id:"judiaosha", name:"桔钓沙", district:"大鹏新区", category:"海边自然", lng:114.572, lat:22.565, duration:"半天", bestTime:"晴天上午", metro:"建议公交或打车", summary:"以细沙和较清澈的近岸景观著称，是大鹏半岛的海滩候选。", highlights:["沙滩","清澈海水","拍照"], tips:"进入方式和开放范围可能变化，需临行核实。" },
  { id:"lianhuashan", name:"莲花山公园", district:"福田区", category:"城市地标", lng:114.055, lat:22.555, duration:"1.5–2.5 小时", bestTime:"日落前", metro:"少年宫站", summary:"用较轻松的步行换取福田中心区的开阔视野。", highlights:["城市全景","公园散步","日落"], tips:"山顶视野好，傍晚人流也会增加。" },
  { id:"civic-center", name:"市民中心广场", district:"福田区", category:"城市地标", lng:114.058, lat:22.543, duration:"1–2 小时", bestTime:"傍晚至夜间", metro:"市民中心站", summary:"深圳当代城市形象最集中的区域之一，适合建筑与夜景漫游。", highlights:["城市建筑","灯光夜景","中心区步行"], tips:"灯光安排以当日官方通知为准，不把表演视为固定项目。" },
  { id:"pingan", name:"平安金融中心云际观光", district:"福田区", category:"城市地标", lng:114.055, lat:22.533, duration:"1–2 小时", bestTime:"日落前后", metro:"购物公园站", summary:"从高空观察深圳密集的城市结构，天气通透时视野更好。", highlights:["高空观景","城市天际线","夜景"], tips:"属于收费项目，云量和能见度会影响体验。" },
  { id:"huaqiangbei", name:"华强北", district:"福田区", category:"特色街区", lng:114.085, lat:22.545, duration:"2–3 小时", bestTime:"午后至傍晚", metro:"华强北站", summary:"电子市场、商业街和高密度城市生活共同构成深圳独特的一面。", highlights:["电子市场","城市观察","街区漫游"], tips:"不同市场营业时间不一，工作日通常更能看到真实商业状态。" },
  { id:"shenzhen-bay", name:"深圳湾公园", district:"南山区", category:"海边自然", lng:113.953, lat:22.486, duration:"2–3 小时", bestTime:"傍晚", metro:"深圳湾公园站", summary:"适合沿海散步、骑行和等待日落，城市天际线与海湾同框。", highlights:["海边步道","骑行","日落"], tips:"海岸线很长，先确定想走的路段，避免无目的消耗体力。", cover:"/images/shenzhen-bay-skyline.jpg", credit:"Windmemories · CC BY-SA 4.0", sourceUrl:"https://commons.wikimedia.org/wiki/File:20201112_The_skyline_at_Shenzhen_Bay.jpg" },
  { id:"talent-park", name:"深圳人才公园", district:"南山区", category:"城市地标", lng:113.948, lat:22.516, duration:"1.5–2 小时", bestTime:"日落至夜间", metro:"后海站", summary:"水面倒影、春笋大厦和后海天际线构成辨识度很高的夜景。", highlights:["天际线","水面倒影","夜间散步"], tips:"可与后海商圈或深圳湾公园选择性组合。" },
  { id:"seaworld", name:"海上世界文化艺术中心", district:"南山区", category:"人文艺术", lng:113.915, lat:22.486, duration:"2–3 小时", bestTime:"下午至夜间", metro:"海上世界站", summary:"滨海建筑、展览空间与蛇口街区结合，适合边看展边散步。", highlights:["建筑","展览","蛇口夜生活"], tips:"展览内容与开放时间需查看场馆当期安排。" },
  { id:"nantou", name:"南头古城", district:"南山区", category:"特色街区", lng:113.923, lat:22.538, duration:"2–3 小时", bestTime:"午后至夜间", metro:"中山公园站", summary:"历史城址与当代小店叠加，是观察深圳新旧城市层次的好地方。", highlights:["历史街巷","咖啡小店","夜间氛围"], tips:"商业空间较多，适合慢走而不是按打卡点赶路。" },
  { id:"oct-loft", name:"华侨城创意文化园", district:"南山区", category:"人文艺术", lng:113.992, lat:22.54, duration:"2–3 小时", bestTime:"午后", metro:"侨城东站", summary:"旧工业空间改造的创意园区，适合看建筑、展览和设计小店。", highlights:["工业改造","设计空间","展览"], tips:"店铺与活动变化较快，临行前确认当期展览。" },
  { id:"dongmen", name:"东门老街", district:"罗湖区", category:"特色街区", lng:114.118, lat:22.548, duration:"2–3 小时", bestTime:"傍晚至夜间", metro:"老街站", summary:"人流密集的老商业街区，适合体验热闹、吃小吃和观察城市生活。", highlights:["老商业街","小吃","夜间人流"], tips:"周末非常拥挤，注意随身物品并预留休息时间。" },
  { id:"happy-harbour", name:"欢乐港湾", district:"宝安区", category:"城市地标", lng:113.887, lat:22.553, duration:"2–3 小时", bestTime:"日落至夜间", metro:"临海站", summary:"海滨公园、现代建筑和摩天轮组成宝安中心区的夜景地标。", highlights:["摩天轮","海滨公园","城市夜景"], tips:"摩天轮为收费项目，是否乘坐可以现场根据天气决定。" },
  { id:"gankeng", name:"甘坑古镇", district:"龙岗区", category:"特色街区", lng:114.136, lat:22.655, duration:"3–4 小时", bestTime:"午后至夜间", metro:"甘坑站", summary:"客家文化主题街区，建筑、夜景和餐饮集中，适合半日慢逛。", highlights:["客家文化","古镇街巷","夜景"], tips:"部分区域商业化较强，适合把重点放在街巷与文化内容。" },
];
