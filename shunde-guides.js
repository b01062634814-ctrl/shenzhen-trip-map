// Shunde route data. Coordinates are WGS84 reference points for browsing;
// always use the named entrance / shop in a navigation app before departure.
const shundeRoutes = [
  {
    id: "old-town", day: "D1", name: "钟楼站出发 · 老城单向逛吃", color: "#087f72",
    summary: "约 09:15 从大良钟楼站出发，先少量吃金榜，再走清晖园、华盖里和琼花戏楼；赋狮楼只作晚餐备选，最后打车回国泰南路。",
    stops: ["sd-zhonglou", "sd-jinbang", "sd-qinghui", "sd-huagai", "sd-qionghua", "sd-fushilou", "sd-hotel-area"],
    times: ["约 09:15 到达", "09:25 少量早餐", "10:15–11:45", "11:45–12:15", "12:15–14:00", "17:30 有胃口再吃", "约 20:00 回住宿区"],
    segments: ["步行约 10–15 分钟", "步行约 10–15 分钟", "步行约 5 分钟", "步行约 5–8 分钟", "步行约 5–8 分钟", "网约车约 10–15 分钟"]
  },
  {
    id: "park-night", day: "D2", name: "住宿区出发 · 公园、博物馆到夜景", color: "#ef6a4b",
    summary: "从国泰南路住宿区出发，凉快时逛顺峰山；午前看顺德博物馆，午间回酒店休息取行李，傍晚去欢乐海岸PLUS，之后按真实返程站导航。",
    stops: ["sd-hotel-area", "sd-shunfeng", "sd-museum", "sd-happycoast"],
    times: ["08:15 出发", "08:30–10:30", "11:00–12:30", "16:00–19:00 后返程"],
    segments: ["网约车约 10–15 分钟", "网约车约 10 分钟", "午休取行李后网约车约 5–10 分钟"]
  }
];

// This is a discoverability count, not a restaurant score: within each of the
// 24 sampled guides / field videos, the same food is counted at most once.
const shundeFoodResearch = {
  sampleSize: 24,
  method: "本轮单独抽样 24 篇公开攻略、实走视频与探店资料；同一来源同一道菜最多记 1 次。提及次数只表示常被写到，不代表口味、卫生或商业推广强弱。",
  ranking: [
    { rank: 1, food: "双皮奶 / 水牛奶甜品", mentions: 19, placeId: "sd-minxin-huagai", note: "老城最顺路；两人先合点 1 份" },
    { rank: 2, food: "粥底火锅 / 毋米粥", mentions: 11, placeId: "sd-wumizhou", note: "正餐级；与赋狮楼二选一" },
    { rank: 3, food: "顺德鱼生 / 一鱼多吃", mentions: 10, placeId: "sd-xinshunfa", note: "高频但非必吃；淡水鱼生有寄生虫风险" },
    { rank: 4, food: "桑拿鸡", mentions: 8, placeId: "sd-baiyi", note: "适合替换一顿正餐，不追加" },
    { rank: 5, food: "烧鹅", mentions: 8, placeId: null, note: "店铺分散，本版不为凑点位强塞远店" },
    { rank: 5, food: "顺德鱼皮", mentions: 8, placeId: "sd-huagai", note: "华盖路小份探索，先看当天出品" },
    { rank: 7, food: "炸牛奶 / 炒牛奶", mentions: 5, placeId: "sd-minxin-huagai", note: "与双皮奶共享一份甜品额度" }
  ],
  sources: [
    ["Klook：15 大顺德必吃美食", "https://www.klook.com/zh-HK/blog/foshan-food/"],
    ["香港01：佛山美食 10 大推介", "https://global.hk01.com/%E6%97%85%E6%B8%B8/60351471/%E4%BD%9B%E5%B1%B1%E7%BE%8E%E9%A3%9F10%E5%A4%A7%E6%8E%A8%E4%BB%8B-%E9%9D%9E%E9%81%97%E7%B2%A5%E5%BA%95%E7%81%AB%E9%94%85-%E9%A1%BA%E5%BE%B7%E9%B1%BC%E7%94%9F-%E6%A1%91%E6%8B%BF%E9%B8%A1-%E6%AD%A3%E5%AE%97%E5%8F%8C%E7%9A%AE%E5%A5%B6"],
    ["Trip：顺德美食一站式攻略", "https://my.trip.com/moments/detail/shunde-district-120098-139226453?locale=zh-MY"],
    ["U Travel：顺德高评分餐厅整理", "https://utravel.com.hk/"],
    ["Yahoo：顺德 10 大地道美味", "https://hk.news.yahoo.com/"],
    ["顺德城市网：代表美食盘点", "https://shundeplus.shundecity.com/index.php/m/a/133737.html"],
    ["携程：食在顺德", "https://gs.ctrip.com/"],
    ["知乎：顺德寻味 48 小时", "https://zhuanlan.zhihu.com/"],
    ["携程：顺德两日一夜逛吃", "https://gs.ctrip.com/"],
    ["Trip：清晖园周边必吃", "https://hk.trip.com/"],
    ["佛山+：清晖园附近觅食", "https://content.foshanplus.com/"],
    ["佛山+：徒步线路周边美食", "https://content.foshanplus.com/"],
    ["Klook：顺德美食一日游", "https://www.klook.com/"],
    ["实走视频：顺德 3 日 2 夜吃住", "https://www.youtube.com/watch?v=Me6UDuQCx_8"],
    ["实走视频：鱼生与粥底火锅", "https://www.youtube.com/watch?v=s7idS-OZY70"],
    ["实走视频：金榜上街传统小食", "https://www.youtube.com/watch?v=lZiPFKZfPIE"],
    ["实走视频：华盖路小食街", "https://www.youtube.com/watch?v=sQLI0QizAsc"],
    ["实走视频：大良乡村早茶", "https://www.youtube.com/watch?v=xC4-INWJBQ4"],
    ["实走视频：大良街坊粥店", "https://www.youtube.com/watch?v=EI3fm-D8a7U"],
    ["Instagram：顺德美食 7 选", "https://www.instagram.com/reel/C_czAvfP3FB/"],
    ["Instagram：顺德 24 小时快闪", "https://www.instagram.com/reel/DIePIe3pcNc/"],
    ["Facebook：顺德现点现做美食盘点", "https://www.facebook.com/travelogcn/videos/1606047864497235/"],
    ["Facebook：新顺发鱼店探店", "https://www.facebook.com/groups/eat.whereveruare/posts/8384705098315550/"],
    ["大众点评：顺德商圈菜品聚合", "https://m.dianping.com/" ]
  ]
};

const shundeUpdates = {
  "sd-qinghui": {
    category: "人文", area: "大良老城", lat: 22.8383866, lng: 113.2498286,
    transit: "清晖路 23 号；从金榜上街步行约 10–15 分钟",
    summary: "钟楼站与金榜之后的上午主景点；只走核心庭院，给午餐和老街留体力。",
    description: "清晖园不是这次的起点，而是从大良钟楼站、金榜上街走来的上午主景点。按回廊、池水和庭院慢走一圈即可，不必每个角落都到。",
    features: "岭南园林、灰塑与水院空间集中，阴影较多，适合上午慢慢看。",
    playability: "看建筑细节、拍回廊倒影；时间紧时只走核心庭院，约 90 分钟也够形成完整体验。",
    itinerary: ["约 10:15 到清晖路 23 号入口，先看当天开放与购票信息。", "沿回廊慢走核心庭院，不追求全部打卡。", "从清晖路一侧离开，步行接华盖里和琼花戏楼。"],
    tips: ["地图点位是园区中心，进园请导航清晖路 23 号入口。", "官网通常公布开放、票务与分时段信息；临时限流以当天公告为准。", "若钟楼站抵达晚于 10 点，压缩金榜停留，不压缩已预约的琼花场次。"],
    source: "https://www.sdqinghuiyuan.cn/",
    researchSources: [["清晖园官方网站：开放与票务", "https://www.sdqinghuiyuan.cn/"], ["Trip 游客评价与停留参考", "https://hk.trip.com/travel-guide/attraction/foshan/qinghui-garden-museum-82949/"]]
  },
  "sd-jinbang": {
    name: "金榜上街", category: "美食", area: "大良老城", lat: 22.8402481, lng: 113.2425951,
    foodRank: 1, foodMentions: "双皮奶 / 水牛奶甜品 · 19/24 篇提到",
    duration: "45–75 分钟", best: "D1 到达后少量早餐", transit: "从大良钟楼站步行约 10–15 分钟",
    summary: "钟楼站后的第一站；奶制品与小食只选一两样分食，不要一早吃撑。",
    description: "金榜上街不是只为一家店而来。先沿街看当天开门、排队和菜单，再从双皮奶、水牛奶或炸物里选一两样分食；口味评价分歧很大，现场判断比照着单一榜单更稳。",
    features: "老街尺度小，奶制甜品与顺德小食集中，适合边走边选。",
    playability: "比较同类甜品或只喝一份奶制品，把胃口留给琼花戏楼正餐。",
    food: "探索重点：原味双皮奶、姜撞奶、水牛奶或炸牛奶；两个人合点一份，先看现做批次与甜度。",
    itinerary: ["从大良钟楼站步行到金榜上街。", "先完整看一圈，再选 1–2 样分食。", "约 10:00 离开，步行去清晖园。"],
    tips: ["老街店铺与营业时段变化快，以当天门店为准。", "热门店排队长就换同类小店，不必执着单一招牌。", "奶制品连吃容易腻，D1 早餐严格控制份量。"],
    source: "https://www.openstreetmap.org/way/630652975",
    researchSources: [["金榜上街游客路线与近期体验", "https://my.trip.com/moments/detail/foshan-207-144480653?locale=zh-MY"], ["手工水牛奶制作背景", "https://www.thepaper.cn/newsDetail_forward_8840075"], ["金榜上街小食实走视频", "https://www.youtube.com/watch?v=TK8zVWJmUB4"]]
  }
};

Object.entries(shundeUpdates).forEach(([id, update]) => {
  const place = extraPlaces.find(item => item.id === id);
  if (place) Object.assign(place, update);
});

extraPlaces.push(...[
  {
    id: "sd-zhonglou", city: "顺德", area: "大良老城", category: "交通",
    name: "大良钟楼站（D1 起点）", lat: 22.8422296, lng: 113.2477468,
    duration: "10–15 分钟", best: "D1 约 09:15", transit: "佛山地铁 3 号线大良钟楼站",
    summary: "第一天明确起点；出站后直接向西走金榜上街，不先绕清晖园。",
    description: "把抵达时间、洗手间和补水都在车站解决，再开始老城单向步行。地图从这里画出第一天的完整动线。",
    features: "离金榜、清晖园与华盖路都近，是大良老城最清楚的集合点。",
    playability: "不在站外反复找早餐；先走金榜，之后顺着老城一路向东南。",
    itinerary: ["约 09:15 到站，出站前完成补水和整理。", "导航金榜上街，步行约 10–15 分钟。", "若到得晚，直接去清晖园，把金榜留到下午。"],
    tips: ["具体出口以当天站内导向和导航为准。", "第一天大部分为步行，行李建议先寄存或只带轻装。", "地图时间是留有余量的旅行时间，不是列车时刻。"],
    source: "https://www.openstreetmap.org/way/908822773"
  },
  {
    id: "sd-hotel-area", city: "顺德", area: "大良新城", category: "住宿",
    name: "国泰南路住宿区（暂定锚点）", lat: 22.8004, lng: 113.2970,
    duration: "住宿 / 午休", best: "D1 夜间、D2 午间", transit: "国泰南路 1–6 号一带；收到酒店名后可替换成精确入口",
    summary: "当前按国泰南路中段作住宿锚点，方便比较顺峰山、博物馆和欢乐海岸的车程。",
    description: "国泰南路很长，当前地图针取 1–6 号一带的中间参考点，不冒充你的酒店门口。它与顺德博物馆、欢乐海岸PLUS较近，第二天适合午间回来休息和取行李。",
    features: "把住宿区加入动线后，D1 不必在老城兜圈；D2 的博物馆、午休和欢乐海岸也能紧凑衔接。",
    playability: "第二天午间回房补水、充电、取行李，比连续暴走更省力。",
    itinerary: ["D1 晚餐后网约车回住宿区。", "D2 早上从酒店直接去顺峰山公园。", "博物馆后回酒店午休取行李，再去欢乐海岸PLUS。"],
    tips: ["这是区域锚点，不是精确酒店入口。", "提供酒店全名后再校正地图针和每段车程。", "退房和寄存时间以酒店当天规则为准。"],
    source: "https://foshanshunde-octharbourplus.orangehotels.cn/"
  },
  {
    id: "sd-huagai", city: "顺德", area: "大良老城", category: "人文",
    name: "华盖里 / 华盖路步行街", lat: 22.8376018, lng: 113.2496924,
    duration: "30–60 分钟", best: "清晖园之后", transit: "从清晖园步行约 5 分钟",
    summary: "骑楼、支巷与小吃连在一起；它是清晖园到琼花戏楼的缓冲段，不另作折返打卡。",
    description: "把华盖里当作清晖园与琼花戏楼之间的连接。主街容易走，支巷更有生活感；先散步观察，不在正餐前连续吃小吃。",
    features: "骑楼老街、日常店铺与旅游小吃混在一起，适合无压力地闲逛。",
    playability: "看骑楼、逛一条支巷、随机选一份小食；不需要固定打卡顺序。",
    food: "可留意牛杂、鱼皮、伦教糕与凉茶；琼花戏楼已订餐时只看不多吃。",
    itinerary: ["清晖园出来后转入华盖里。", "沿骑楼阴影慢走，不来回刷街。", "按预约时间去华盖里四巷 14 号琼花戏楼。"],
    tips: ["这是街区参考点，店铺位置和营业会变。", "正午较晒，优先走骑楼阴影处。", "主餐前只买小份，把探索空间留给正餐。"],
    source: "https://www.openstreetmap.org/"
  },
  {
    id: "sd-qionghua", city: "顺德", area: "大良老城", category: "美食",
    name: "琼花戏楼·顺德菜表演餐厅", lat: 22.8342, lng: 113.2552,
    duration: "1.5–2 小时", best: "D1 主午餐；按当天演出预约", transit: "华盖里四巷 14 号；从华盖路步行约 5–8 分钟",
    summary: "D1 的主餐：顺德菜、广式茶点配粤剧、醒狮等表演；场次不合时再把它调整到晚餐。",
    description: "琼花戏楼放在老城步行线的中段最顺。先向店家确认当天演出场次、订座和消费规则；若午场不合适，可与赋狮楼调换主次，但一天不安排两顿大正餐。",
    features: "顺德菜与戏楼演出结合，公开介绍提到粤剧、醒狮等节目；节目与演员以当天安排为准。",
    playability: "一顿饭同时体验地方餐饮与表演；时间不合也可只把这里作为备选餐厅。",
    food: "探索重点：顺德菜、广式茶点；按两人份量点菜，先问哪些菜为现点现做。",
    itinerary: ["从华盖里步行到华盖里四巷 14 号。", "到店确认演出场次、座位和消费规则，再点适合人数的菜。", "餐后慢走老城；若已经饱，取消赋狮楼。"],
    tips: ["地图针按街巷相邻门牌插值，找店请用完整地址。", "演出时段与座位视线可能变化，出发前向店家确认。", "本地图不保证所有菜品均现做；介意预制时逐道询问制作与备料方式。"],
    source: "https://m.dahepiao.com/jingqu/qhxlcg/",
    researchSources: [["琼花戏楼地址与公开演出介绍", "https://m.dahepiao.com/jingqu/qhxlcg/"]]
  },
  {
    id: "sd-fushilou", city: "顺德", area: "大良", category: "美食",
    name: "赋狮楼·顺德粥底火锅", lat: 22.831814003011843, lng: 113.25435201576364,
    foodRank: 2, foodMentions: "粥底火锅 / 毋米粥 · 11/24 篇提到",
    duration: "1.5–2 小时", best: "D1 晚餐备选；有胃口再去", transit: "碧鉴路 56 号；从琼花戏楼步行约 5–8 分钟",
    summary: "粥底火锅作为晚餐备选，不与琼花戏楼强行连吃两顿大餐。",
    description: "若午餐较早、下午继续逛且晚上确实饿，再来吃粥底火锅；否则直接回酒店，把它留作下次。先确认当天食材、份量和计价，再少量分批下锅。",
    features: "顺德粥底火锅，重点是清粥底、分批涮食材和最后吸收鲜味的粥。",
    playability: "两个人选一到两种主料，加一份蔬菜或油条，避免为了尝全菜单点太多。",
    food: "建议探索：粥底、鱼片或鸡肉、时蔬、油条；鲜活情况与计价以当天菜单为准。",
    itinerary: ["先判断午餐后的真实饥饿程度。", "有胃口再到店看菜单和等位；不饿就跳过。", "晚餐后网约车回国泰南路住宿区。"],
    tips: ["地址已核到碧鉴路 56 号，导航当日结果优先。", "介意预制时可现场逐道询问制作与备料方式。", "龙的酒楼按你的偏好不纳入路线；本项目也不对其制作方式作未经核实的断言。"],
    source: "https://map.qq.com/m/detail/poi/poid=6739000127798680704"
  },
  {
    id: "sd-minxin-huagai", city: "顺德", area: "大良老城", category: "美食",
    name: "民信老铺（华盖路店）", pinName: "★双皮奶｜民信老铺", lat: 22.8371528, lng: 113.2485551,
    foodRank: 1, foodMentions: "双皮奶 / 水牛奶甜品 · 19/24 篇提到",
    duration: "20–40 分钟", best: "D1 老城段分食一份", transit: "华盖路 115–119 号一带；清晖园与华盖里步行可达",
    summary: "24 篇样本中提及最多的类别；原味双皮奶优先，两个人分一份后再决定要不要加炸牛奶。",
    description: "这里作为高频菜“落到地图”的代表点，不代表它一定胜过金榜小店。样本对双皮奶甜度、奶味和排队价值评价分歧明显，所以把它安排为小份比较，而不是必须完成的打卡任务。",
    features: "双皮奶、姜撞奶、炸牛奶等水牛奶甜品集中，位置与 D1 老城线重合。",
    playability: "先点一份原味双皮奶，两个人试过甜度和奶味后，再决定是否加第二样。",
    food: "高频统计：双皮奶/水牛奶甜品 19/24；炸牛奶/炒牛奶 5/24。",
    itinerary: ["清晖园或华盖里途中顺路到店。", "先合点一份原味双皮奶。", "若琼花戏楼即将开餐，不再追加炸物。"],
    tips: ["地址资料在华盖路 115–119 号与华盖里 1 号两种写法间有差异，地图针按华盖里街内 OSM 门店点标注，导航时核对店名。", "19/24 是内容提及频次，不是评分。", "甜度和口感高度主观，排队过长时金榜上街同类小店可以替代。"],
    source: "https://hk.trip.com/restaurant/china/foshan/detail/minxin-old-shop-10561901/",
    researchSources: [["Trip：门店地址与游客评价", "https://hk.trip.com/"], ["永安旅游：华盖路店地址", "https://www.wingontravel.com/"], ["大良水牛奶与双皮奶背景", "https://www.thepaper.cn/newsDetail_forward_8840075"]]
  },
  {
    id: "sd-wumizhou", city: "顺德", area: "大良老城西北", category: "美食",
    name: "太艮堡毋米粥（锦龙路总店）", pinName: "★粥底火锅｜毋米粥", lat: 22.8520517, lng: 113.2367342,
    foodRank: 2, foodMentions: "粥底火锅 / 毋米粥 · 11/24 篇提到",
    duration: "1.5–2 小时", best: "单独作为一顿正餐", transit: "锦龙路 270 号；从钟楼/金榜短途网约车更省力",
    summary: "第二高频正餐；与赋狮楼同属粥底火锅路线，两家二选一，不要为了榜单连续吃。",
    description: "把食材按海鲜、肉、蔬菜的顺序少量分批涮，最后喝粥底。它位于老城西北侧，若 D1 已预约琼花戏楼，不建议再为它改主线；可作为琼花场次不合适时的替换正餐。",
    features: "“有米不见米”的粥水锅底，重点在食材下锅顺序和最后吸收鲜味的粥。",
    playability: "两个人选一到两种主料即可；先问份量、计价、茶位与当天鲜活食材。",
    food: "高频统计：粥底火锅/毋米粥 11/24。代表吃法是一鲜、二荤、三素、最后喝粥。",
    itinerary: ["只在替换一顿正餐时加入。", "到店先问两人份量和当天食材。", "吃完直接按下一站叫车，不再追加赋狮楼。"],
    tips: ["地图坐标由公开地图坐标转换为 WGS84，找入口仍以锦龙路 270 号导航为准。", "与赋狮楼功能重叠，二选一。", "介意预制时逐道询问丸滑、小吃与配菜的制作方式。"],
    source: "https://www.amap.com/place/B0FFH7FW5P",
    researchSources: [["Klook：粥底火锅介绍与锦龙路地址", "https://www.klook.com/zh-HK/blog/foshan-food/"], ["OpenRice：锦龙路 270 号门店资料", "https://www.openrice.com.cn/"]]
  },
  {
    id: "sd-xinshunfa", city: "顺德", area: "大良南部", category: "美食",
    name: "新顺发鱼店·金牌鱼生（大良店）", pinName: "★鱼生｜新顺发", lat: 22.8177, lng: 113.2548,
    foodRank: 3, foodMentions: "顺德鱼生 / 一鱼多吃 · 10/24 篇提到",
    duration: "1.5–2 小时", best: "明确接受生食风险时", transit: "同兴路 8 号广地商贸城 3 栋 175–180 铺；建议网约车",
    summary: "第三高频，但淡水鱼生并非必吃项；地图保留探索点，主路线默认不安排。",
    description: "公开资料常写一鱼多吃：鱼生、鱼皮、骨腩和鱼粥。但生食淡水鱼存在寄生虫风险，不能靠“现杀”“看起来新鲜”消除；不接受风险时，点熟食鱼、鱼皮或鱼粥即可。",
    features: "一鱼多吃和刀工体验集中；地点离 D1 老城核心、D2 住宿区都需要打车。",
    playability: "把它视为有明确风险偏好的可选正餐，不为“高频”勉强尝生食。",
    food: "高频统计：顺德鱼生/一鱼多吃 10/24；鱼皮另有 8/24。可只选彻底熟制菜。",
    itinerary: ["决定前先确认所有同行者都接受淡水鱼生风险。", "不接受时只点彻底熟制的一鱼多吃菜式。", "加入本店就替换一顿正餐，不与琼花、赋狮楼叠加。"],
    tips: ["地图针按同兴路与商贸城公开地址近似标注，导航请用完整店名和门牌。", "孕妇、儿童、老年人及免疫力较弱者不建议生食。", "鱼生高频不等于低风险，本地图默认不把它列入主路线。"],
    source: "https://www.openrice.com/zh/foshan/r-%E6%96%B0%E9%A0%86%E7%99%BC%E9%AD%9A%E5%BA%97-%E9%87%91%E7%89%8C%E9%AD%9A%E7%94%9F-%E5%A4%A7%E8%89%AF-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-r8364551",
    researchSources: [["OpenRice：门店地址、营业段与招牌菜", "https://www.openrice.com/zh/foshan/r-%E6%96%B0%E9%A0%86%E7%99%BC%E9%AD%9A%E5%BA%97-%E9%87%91%E7%89%8C%E9%AD%9A%E7%94%9F-%E5%A4%A7%E8%89%AF-%E7%B2%B5%E8%8F%9C-%E5%BB%A3%E6%9D%B1-r8364551"], ["香港01：一鱼多吃与地址", "https://global.hk01.com/%E6%97%85%E6%B8%B8/60351471/%E4%BD%9B%E5%B1%B1%E7%BE%8E%E9%A3%9F10%E5%A4%A7%E6%8E%A8%E4%BB%8B-%E9%9D%9E%E9%81%97%E7%B2%A5%E5%BA%95%E7%81%AB%E9%94%85-%E9%A1%BA%E5%BE%B7%E9%B1%BC%E7%94%9F-%E6%A1%91%E6%8B%BF%E9%B8%A1-%E6%AD%A3%E5%AE%97%E5%8F%8C%E7%9A%AE%E5%A5%B6"]]
  },
  {
    id: "sd-baiyi", city: "顺德", area: "大良老城西侧", category: "美食",
    name: "百益桑拿鸡（大良店）", pinName: "★桑拿鸡｜百益", lat: 22.8426, lng: 113.2436,
    foodRank: 4, foodMentions: "桑拿鸡 · 8/24 篇提到",
    duration: "1.5–2 小时", best: "提前取号，替换一顿正餐", transit: "凤山中路 47 号附近；靠近金榜商圈，地图针为门牌路段参考",
    summary: "第四高频，蒸气现熟是它的体验重点；排队和份量反馈分歧较大，作为正餐替换项。",
    description: "桑拿鸡以蒸气短时蒸熟鸡肉，汁水落入下层汤底。公开攻略反复提及百益大良店，但游客反馈也常提到热门时段等位，因此不把它与琼花戏楼、粥底火锅连续安排。",
    features: "蒸气鸡、下层汤底和分批现蒸的过程感明显，适合两人共享。",
    playability: "选鸡肉加一两份蔬菜即可；先问最小份量、等位和收费项目。",
    food: "高频统计：桑拿鸡 8/24。先吃鸡、再蒸菜、最后喝吸收肉汁的汤底。",
    itinerary: ["D1 在金榜附近先看等位。", "若选择本店，就替换琼花或当日晚餐，不追加第二顿正餐。", "饭后再按体力回老城或直接去住宿区。"],
    tips: ["公开资料写作凤山中路 47 号附近；地图针按该路段近似标注，入口以导航为准。", "热门时段可能排队，先看现场再决定。", "介意预制时重点询问丸滑、腌制小吃和配菜；鸡肉现蒸不代表全桌所有菜都现制。"],
    source: "https://m.dianping.com/shop/1441139188?msource=applemaps",
    researchSources: [["Klook：百益大良店地址与桑拿鸡吃法", "https://www.klook.com/zh-HK/blog/foshan-food/"], ["大众点评：大良店门店页", "https://m.dianping.com/shop/1441139188?msource=applemaps"]]
  },
  {
    id: "sd-shunfeng", city: "顺德", area: "大良", category: "公园",
    name: "顺峰山公园", lat: 22.8303153, lng: 113.2736278,
    duration: "1.5–2 小时", best: "D2 早上", transit: "从国泰南路住宿区网约车约 10–15 分钟",
    summary: "凉快时只走牌坊、近湖步道与青云塔视角，不完整环湖。",
    description: "公园很大，省力玩法是把主入口牌坊、近湖步道和青云塔视角作为核心，走到体感合适就返回。上午比下午更利于控制暴晒与体力。",
    features: "大型牌坊、湖面、草地与远处青云塔同框，是顺德城市尺度最开阔的一站。",
    playability: "散步、拍牌坊与湖景、坐草地休息；不必为了“逛完”走到远端。",
    itinerary: ["约 08:30 从主入口进入。", "沿近湖步道选一小段慢走，不完整环湖。", "约 10:30 在主入口叫车去顺德博物馆。"],
    tips: ["地图点为主入口附近，不是整个公园中心。", "宝林寺只在愿意爬台阶时加，不列入主线。", "晴天仍要防晒与补水。"],
    source: "https://www.openstreetmap.org/relation/17231340",
    researchSources: [["顺峰山公园近年更新与公共空间", "https://epaper.nfnews.com/m/ipaper/nfrb/html/202502/28/content_10128222.html"], ["游客停留时间与步行体验", "https://cn.tripadvisor.com/Attraction_Review-g494927-d1843415-Reviews-Mt_Shunfeng_Park-Foshan_Guangdong.html"]]
  },
  {
    id: "sd-museum", city: "顺德", area: "大良新城", category: "人文",
    name: "顺德博物馆", lat: 22.8017452, lng: 113.2883393,
    duration: "1–1.5 小时", best: "D2 11:00 左右", transit: "从顺峰山公园网约车约 10 分钟；靠近国泰南路住宿区",
    summary: "午前转入室内，快速建立顺德历史、产业与民俗背景；遇闭馆则直接回酒店休息。",
    description: "把博物馆放在顺峰山之后，可避开正午热度，也与国泰南路住宿区在同一片区。展览和预约规则会变，出发前查看当天开放信息。",
    features: "地方历史、民俗与产业主题集中，适合在吃喝之外补一段顺德背景。",
    playability: "先看常设展导览图，只选最感兴趣的两三个展区，不追求逐柜看完。",
    itinerary: ["约 11:00 到馆，先确认预约与最后入馆时间。", "用 60–90 分钟看常设展重点。", "约 12:30 回国泰南路午休、取行李。"],
    tips: ["开放日、预约和临展以博物馆当天公告为准。", "若闭馆或预约已满，直接回酒店，不额外折返。", "地图点为建筑参考点，入口按现场导向。"],
    source: "https://www.sdmuseum.com.cn/inforlist.html",
    researchSources: [["顺德博物馆官方资讯", "https://www.sdmuseum.com.cn/inforlist.html"], ["开放与游客停留参考", "https://www.trip.com/travel-guide/attraction/foshan/shunde-museum-24652885?curr=TWD&locale=zh-HK"]]
  },
  {
    id: "sd-happycoast", city: "顺德", area: "大良新城", category: "乐园",
    name: "欢乐海岸PLUS", lat: 22.8184964, lng: 113.2993887,
    duration: "3–4 小时", best: "D2 16:00 到夜间", transit: "欢乐大道 1 号；从国泰南路住宿区网约车约 5–10 分钟",
    summary: "傍晚看摩天轮与街区亮灯；免费街区和付费项目分开选，19 点后按真实返程站出发。",
    description: "午间回酒店休息、取行李后再来。先逛开放街区、看摩天轮和灯光，再根据排队和体力决定是否购买一个主题项目；不把每个园区都塞进同一天。",
    features: "摩天轮、曲水湾街区、餐饮与主题项目集中，夜间氛围比白天完整。",
    playability: "可只逛街区和吃饭，也可选一两个付费项目；最后直接去实际返程站。",
    food: "园区餐饮更偏便利；想把晚餐留给真正想吃的顺德菜，可先查好店再来散步。",
    itinerary: ["约 16:00 到达，先逛免费街区。", "看亮灯与摩天轮，再选一个真正想玩的项目。", "约 19:00 后按车票与真实返程站导航，不预设终点。"],
    tips: ["顺德欢乐海岸PLUS与深圳欢乐海岸不是同一地点。", "各票种、项目与开放季节不同，购票前核对名称。", "返程站尚未确定，务必按车票倒推离园时间。"],
    source: "https://www.octharbourplus.com/",
    researchSources: [["欢乐海岸PLUS官方网站", "https://www.octharbourplus.com/"]]
  },
  {
    id: "sd-dawaigong", city: "顺德", area: "大良", category: "美食",
    name: "大围公早餐（可选支线）", lat: 22.8390, lng: 113.2590,
    duration: "45–60 分钟", best: "想吃本地早餐时早去", transit: "大围六街三巷 10 号之一；近东乐路站，地图针为街巷参考",
    summary: "粥、肉碎肠粉、油条、豆浆等早餐；不顺 D1 钟楼起点，列作 D2 早起支线而非主线。",
    description: "如果愿意早起，可从酒店打车先吃早餐，再去顺峰山；若想省力，直接酒店早餐即可。把它放进备选而不是主线，是为了避免为一顿早餐多绕路。",
    features: "传统街坊早餐组合，适合两人分点几样，不必各点一整套。",
    playability: "观察当天出品和街坊点单，再选粥、肠粉与油条中的两三样分食。",
    food: "探索重点：粥、肉碎肠粉、油条、豆浆；价格与供应以当天为准。",
    itinerary: ["仅在愿意 07:30 左右出门时加入。", "早餐后网约车去顺峰山公园。", "不早起就跳过，不影响主线。"],
    tips: ["地图针为街巷参考，找店请导航完整地址。", "早餐档营业与售罄时间可能变化，出发前复核。", "不要为了早餐牺牲整天体力。"],
    source: "https://content.foshanplus.com/",
    researchSources: [["本地早餐实走视频", "https://www.youtube.com/watch?v=PTHqsKPwPTc"]]
  },
  {
    id: "sd-shunfeng-restaurant", city: "顺德", area: "大良", category: "美食",
    name: "顺峰山庄（多人餐备选）", lat: 22.8038716, lng: 113.2632101,
    duration: "1.5–2 小时", best: "多人聚餐或想坐下吃传统粤菜时", transit: "105 国道与果园街交叉口西北侧；建议网约车",
    summary: "传统粤菜与点心备选，更适合多人；两个人去要先问茶位、服务费与小份菜。",
    description: "这类山庄式餐厅适合想坐下来吃完整一餐或多人分菜。两个人也能去，但要控制份量，不把它硬塞进已经有琼花戏楼与赋狮楼的主线。",
    features: "传统粤菜、点心与较完整的宴席环境。",
    playability: "看当天点心与烧味供应，优先选能分食的小份菜。",
    food: "探索重点可放在点心、烧味与时令菜；具体菜单和价格以当天为准。",
    itinerary: ["只在同行人数增加或临时想吃完整粤菜时选择。", "先问等位、茶位、服务费与菜量。", "吃完直接打车回住宿区或返程。"],
    tips: ["两个人不宜照多人榜单点菜。", "公开评价样本较少且分散，现场菜单比旧攻略可靠。", "不列入主线，避免为用餐跨城折返。"],
    source: "https://cn.tripadvisor.com/Restaurant_Review-g494927-d4565234-Reviews-ShunFeng_ShanZhuang-Foshan_Guangdong.html",
    researchSources: [["佛山本地报道中的顺峰山庄", "https://www.foshannews.net/"], ["游客餐厅评价参考", "https://cn.tripadvisor.com/Restaurant_Review-g494927-d4565234-Reviews-ShunFeng_ShanZhuang-Foshan_Guangdong.html"]]
  },
  {
    id: "sd-baolin", city: "顺德", area: "大良", category: "人文",
    name: "宝林寺（顺峰山加长支线）", lat: 22.8153133, lng: 113.2719101,
    duration: "1–2 小时", best: "体力充足且愿意爬台阶", transit: "位于顺峰山片区；与公园主入口并非一步之遥",
    summary: "只在愿意爬坡、减少后续项目时加入；不属于省力主线。",
    description: "宝林寺可作为顺峰山的加长版本，但会增加台阶、交通与停留时间。两天行程已较满，默认不去比强塞进去更舒服。",
    features: "寺院建筑与山地视角，体验和湖边公园不同。",
    playability: "适合对寺院建筑有明确兴趣的人；普通散步需求留在公园主入口即可。",
    itinerary: ["先完成顺峰山核心段。", "确认体力和开放情况后再决定。", "若加入，取消或缩短博物馆。"],
    tips: ["着装得体并遵守场所规则。", "台阶与坡度会增加体力消耗。", "开放与入场要求以当天现场为准。"],
    source: "https://www.openstreetmap.org/"
  },
  {
    id: "sd-desheng-river", city: "顺德", area: "大良新城", category: "公园",
    name: "德胜河滨公园（安静替代）", lat: 22.7813816, lng: 113.2967380,
    duration: "1–1.5 小时", best: "傍晚", transit: "从国泰南路住宿区短途网约车",
    summary: "不想逛主题街区时，用河边散步替换欢乐海岸，不与主线叠加。",
    description: "它是第二天傍晚的安静替代项：如果已经疲惫、不想排队或不玩付费项目，就到河边短走，之后直接返程。",
    features: "城市河岸、开阔视野和轻量散步，商业密度低于欢乐海岸。",
    playability: "坐一会、吹风、看傍晚光线；不追求走完整段。",
    itinerary: ["午休后按天气与体力二选一。", "选择这里就不再去欢乐海岸。", "按返程票倒推离开时间。"],
    tips: ["作为替代项而不是新增打卡点。", "雨天或大风时改为室内。", "夜间照明与出口以现场为准。"],
    source: "https://www.openstreetmap.org/"
  }
]);

destinationGuides["顺德"] = {
  intro: "在原有 35 篇小红书游记/评论基础上，本轮再抽样 24 篇公开攻略、视频与探店资料，并把高频美食代表店标进地图。D1 从大良钟楼站单向走老城，D2 从国泰南路住宿区走公园—博物馆—午休—欢乐海岸。",
  foods: [
    ["高频榜第一：双皮奶 / 水牛奶甜品（19/24）", "地图标出民信华盖路店与金榜上街；两个人先合点一份，甜度不合就停止。"],
    ["高频榜第二：粥底火锅 / 毋米粥（11/24）", "地图标出太艮堡锦龙路总店与赋狮楼；只选一家作为正餐。"],
    ["高频榜第三：顺德鱼生 / 一鱼多吃（10/24）", "地图标出新顺发大良店，但淡水鱼生有寄生虫风险，主路线默认不安排，可只点彻底熟食。"],
    ["并列高频：桑拿鸡、烧鹅、鱼皮（各 8/24）", "桑拿鸡标出百益大良店；鱼皮可在华盖路小份探索；烧鹅店分散，本版不为凑点位强塞远店。"],
    ["D1 主餐：琼花戏楼", "华盖里四巷 14 号；优先按演出时段预约。它与赋狮楼二选一顿大餐，不连吃。"],
    ["D1 早餐：金榜上街少量探索", "双皮奶、姜撞奶、水牛奶或炸牛奶只选一两样分食；甜度和口味评价分歧大，以现场为准。"],
    ["晚餐备选：赋狮楼粥底火锅", "碧鉴路 56 号；午餐后真饿再去。鱼片或鸡肉少量分批涮，最后尝粥底。"],
    ["早餐支线：大围公", "大围六街三巷 10 号之一；粥、肉碎肠粉、油条、豆浆。只在 D2 愿意早起时加入。"],
    ["多人备选：顺峰山庄", "更适合多人分菜；两个人先问茶位、服务费和小份菜，不列入省力主线。"],
    ["关于预制菜", "龙的酒楼不纳入路线。其他门店也不做“完全无预制”保证；介意时现场逐道询问制作与备料方式。"]
  ]
};
