const places = [
  {
    id: "dameisha",
    name: "大梅沙海滨公园",
    category: "海边",
    area: "盐田",
    lat: 22.5967,
    lng: 114.3068,
    duration: "3–5 小时",
    best: "晴天下午到日落前",
    transit: "地铁 8 号线大梅沙站 A 口",
    summary: "免费、地铁直达、配套成熟；想轻松看海和踩水，优先选这里。",
    description: "大梅沙适合做一趟不赶时间的海边半日行。先沿沙滩和开放栈道走一段，再决定是否下水；十月白天仍可能偏晒，傍晚通常更舒服。周末和晴天人会明显变多，尽量避开正午和节假日客流高峰。",
    features: "免费海滨公园，地铁出站后很快能到沙滩。优势是交通和洗脚、餐饮等配套相对成熟，代价是晴天周末人多，海水观感也很受天气、降雨和潮汐影响。",
    playability: "适合第一次去盐田看海、想下水或不愿为沙滩门票付费的人。若更在意安静、拍照布景或露营，大梅沙不是最优；若只是轻松看海，它通常比玫瑰海岸更省钱省事。",
    itinerary: ["大梅沙站 A 口出站，先到沙滩判断当天人流、海况和体感。", "沿当天明确开放的海滨栈道走一段；遇到围挡就返回上层步道，绝不翻越。", "日落前回到沙滩或高处看海；若继续去小梅沙，直接坐地铁 1 站最稳妥。"],
    metro: [["5","塘朗 → 黄贝岭","往黄贝岭方向"],["8","黄贝岭 → 大梅沙","往溪涌方向"]],
    lastWalk: "大梅沙站 A 口按海滨公园指引步行。入口和临时围挡会调整，以现场导向为准。",
    tips: ["海边体验高度依赖连续晴天；刚下过大雨时不要只凭宣传照判断海水颜色。", "栈道维护和灯塔封闭会变化，任何围挡都不要翻越，可改走上层人行步道。", "带防晒、饮水和可冲洗的鞋；返程高峰可稍晚离场或提前进站。"],
    image: "https://newbbs-fd.zol-img.com.cn/t_s1200x5000/g7/M00/03/0C/ChMkK2YDzF6IQHyCAAeh6_Fz_TsAAcQKQPDorkAB6ID703.jpg",
    source: "https://www.szmc.net/szmc_en",
    researchSources: [
      ["大小梅沙差异与 325 条评论", "https://www.xiaohongshu.com/search_result/68de353f0000000005010b50?xsec_token=ABOfoc8wfzZlMMvWq_4WPoTTkCJpP-_FRd4N02jFeWZiM=&xsec_source="],
      ["大梅沙—小梅沙步行路线与封闭反馈", "https://www.xiaohongshu.com/search_result/6925a0bb000000001f00f123?xsec_token=ABnn2cV7xqw74js7K9mmvrpm-riKtyHRfjfDix9EstMCQ=&xsec_source="],
      ["大小梅沙—背仔角—溪涌实测", "https://www.xiaohongshu.com/search_result/69525565000000001e037627?xsec_token=AB1OEB9A5b9Vz_vKa0CM0S2mLlRCZALvk3eYG7bo9b5a4=&xsec_source="]
    ]
  },
  {
    id: "xiaomeisha",
    name: "小梅沙海滨公园与海滨步道",
    category: "海边",
    area: "盐田",
    lat: 22.5879,
    lng: 114.3308,
    duration: "2–4 小时",
    best: "晴天上午或下午",
    transit: "地铁 8 号线小梅沙站",
    summary: "收费沙滩换来相对少的人和更完整配套；不进沙滩也可看海散步。",
    description: "小梅沙要把“收费海滨公园”和“外围海滨步道”分开理解。近期游客实测常见成人票约 50 元，但活动价、儿童规则和再次入园政策会变，不能把单篇笔记当固定票价。只想吹风看海，可先走外围开放步道，再决定是否买票。",
    features: "地铁直达，收费区通常比大梅沙人少，换衣、洗手间和餐饮配套更集中。晴天水色更好看，但并不等于每天都是“玻璃海”。",
    playability: "适合带娃挖沙、重视更衣洗脚和想少一点人群的人；若不准备下水或挖沙，先走免费步道更划算。与大梅沙只隔 1 站地铁，可现场二选一，不必强行两个沙滩都买单。",
    itinerary: ["小梅沙站出站后先到外围步道看海况和人流。", "想下水、挖沙或使用收费区配套，再到正规购票入口确认当天票价与规则。", "步道遇到维护围挡就原路返回或走上层人行道；不要跟随帖子翻栏杆去灯塔。"],
    metro: [["5","塘朗 → 黄贝岭","往黄贝岭方向"],["8","黄贝岭 → 小梅沙","往溪涌方向"]],
    lastWalk: "按“小梅沙海滨公园”或“小梅沙海滨步道”的具体目标跟随站内导向；两者不是同一个收费范围。",
    tips: ["购票前确认成人、儿童、冲洗、更衣和再次入园规则，活动价不等于长期票价。", "连续晴天通常更适合看海；雨后、涨退潮和大风都会改变水色与沙滩状态。", "封闭栈道和灯塔不要翻栏杆进入；把帖子中的“很多人都翻”视为风险提醒，不是路线建议。"],
    source: "https://www.szmc.net/szmc_en",
    researchSources: [
      ["收费、配套与游客分歧", "https://www.xiaohongshu.com/search_result/68de353f0000000005010b50?xsec_token=ABOfoc8wfzZlMMvWq_4WPoTTkCJpP-_FRd4N02jFeWZiM=&xsec_source="],
      ["步道开放与骑行限制评论", "https://www.xiaohongshu.com/search_result/6925a0bb000000001f00f123?xsec_token=ABnn2cV7xqw74js7K9mmvrpm-riKtyHRfjfDix9EstMCQ=&xsec_source="],
      ["全线游玩时间与溪涌延伸段", "https://www.xiaohongshu.com/search_result/69525565000000001e037627?xsec_token=AB1OEB9A5b9Vz_vKa0CM0S2mLlRCZALvk3eYG7bo9b5a4=&xsec_source="]
    ]
  },
  {
    id: "rose-coast",
    name: "玫瑰海岸",
    category: "海边",
    area: "大鹏",
    lat: 22.5888,
    lng: 114.5336,
    duration: "3–6 小时",
    best: "连续晴天的工作日",
    transit: "地铁 8 号线溪涌站，再转公交或网约车",
    summary: "拍照和露营有优势，但不是纯看海的性价比首选；属于有条件推荐。",
    description: "玫瑰海岸的核心优势不是“深圳最好的天然海滩”，而是收费后相对可控的人流、婚纱摄影布景、露营和较完整的停留场景。小红书正文与评论分歧很大：晴天、退潮、工作日常被评价为出片；雨后、暑假高峰则反复出现海水和垃圾观感差、厕所拥挤、冲洗另收费、园内消费贵的反馈。",
    features: "海滩叠加婚纱摄影基地和露营氛围，适合带相机、帐篷或想认真拍照的人。它看不到正面海上落日，热门机位可能被婚纱摄影占用；只想散步看海的人容易觉得门票不值。",
    playability: "结论是“有条件推荐”：工作日、连续晴天、计划停留半天并以拍照或露营为主，可以去；节假日、刚下过雨、只想游泳或免费吹风，则优先大小梅沙。近期帖子常见门市票约 50 元，也有人买到 28–30 元活动票，必须以出发当天官方购票页为准。",
    itinerary: ["出发前先看过去 48 小时天气；刚下过大雨就换到城市行程。", "到场先看海况、风浪和拥挤程度，再决定是否下水；拍照先避开婚纱团队占用的机位。", "自带饮水和简单食物，预留冲洗、更衣的额外费用；若只想短暂停留，不建议专程远途往返。"],
    metro: [["5","塘朗 → 黄贝岭","往黄贝岭方向"],["8","黄贝岭 → 溪涌","往溪涌方向"]],
    lastWalk: "溪涌站出站后按实时导航转公交或网约车到景区正式入口。末段道路弯多，容易晕车请提前准备；不要仅凭旧攻略从小梅沙打车。",
    tips: ["门票、冲洗和再次入园规则分别确认；评论中的优惠票只是个案。", "海水与沙滩状态受降雨、潮汐和清洁频率影响很大，优先看临近日期实况。", "这里更像“海边拍照与露营场地”，不是免费公共海滩；对婚纱布景无兴趣时性价比会明显下降。"],
    source: "https://www.szmc.net/szmc_en",
    researchSources: [
      ["负面体验与 85 条正反评论", "https://www.xiaohongshu.com/search_result/6a7c6bdc000000002202cc12?xsec_token=ABYg5J3XUS6kvrDeIMhUHzxW32ryFpEnzoimadKCTtORM=&xsec_source="],
      ["雨后海况与 124 条评论复核", "https://www.xiaohongshu.com/search_result/6a102ec10000000008024910?xsec_token=ABn8Ohx0sf8ON3J6Ot7KW3MMYtQQAEd-lou5FD7ekW5Nk=&xsec_source="],
      ["种草或避雷：交通、人流与落日", "https://www.xiaohongshu.com/search_result/68b56ac6000000001d0249ce?xsec_token=ABnzdt0Ne_2m5tWCDdx76XYfzgLrVnGFPDH9wJezkBK_8=&xsec_source="],
      ["门票、露营与冲洗费用评论", "https://www.xiaohongshu.com/search_result/686208e9000000001d00dbb5?xsec_token=ABjpm65yF-G69gyhpMFDyvqWXfRcDuGrhtR4GQDp4AAg0=&xsec_source="]
    ]
  },
  {
    id: "lianhuashan",
    name: "莲花山公园",
    category: "城市",
    area: "福田",
    lat: 22.5553,
    lng: 114.0566,
    duration: "2–3 小时",
    best: "日落前 1 小时",
    transit: "地铁 3 / 4 号线少年宫站",
    summary: "用不太费力的一段上坡，换一张深圳中心区的经典天际线。",
    description: "莲花山是第一次看深圳城市轮廓很合适的起点。山不高，沿路绿荫多，到山顶广场后可以俯瞰市民中心与福田天际线。日落前抵达更舒服，也能顺势把市民中心一带连成一次傍晚散步。",
    features: "免费城市公园，主峰海拔不高，但能把市民中心、平安金融中心和福田高楼放进同一张视野。这里的核心是短时登高、城市观察和傍晚风筝广场氛围。",
    playability: "适合第一次到福田、想看深圳城市中轴线，又不想安排高强度徒步的人。普通步速上山约 20–30 分钟；如果只想看景，登顶后停留即可，不必绕完整个公园。",
    food: "下山可步行接市民中心、中心书城及福中路商圈；想吃得更集中，可转去水围或八卦岭，不要把山顶当作固定餐饮点。",
    itinerary: ["从少年宫站出站后选择南门或西门，沿绿荫步道上山。", "到山顶广场看市民中心和福田天际线，晴天傍晚预留拍照时间。", "下山后在市民中心片区散步，或按当天体力转去附近商圈吃饭。"],
    metro: [["5","塘朗 → 深圳北站","往黄贝岭方向"],["4","深圳北站 → 少年宫","往福田口岸方向"]],
    lastWalk: "少年宫站按公园指引前往入口；南门、西门和山顶步道不是同一个出入口，按体力选择。",
    researchSources: [
      ["地铁直达经典徒步线20分钟登顶｜莲花山公园", "https://www.xiaohongshu.com/search_result/6a96c27c0000000027015349?xsec_token=AB9n1grqxygvCUEIH3KnX4drZ-9eZC9AQ_LvmANXwn-nI=&xsec_source="],
      ["深圳莲花山保姆级｜轻松登顶看CBD", "https://www.xiaohongshu.com/search_result/6aa502b4000000002a026fab?xsec_token=ABIt4d_y034tY4ZgzF7DbCaW_fG5_ax1hWuFo4Ums4oAE=&xsec_source="],
      ["莲花山怎么变成这样了？", "https://www.xiaohongshu.com/search_result/6aa61b03000000002701691c?xsec_token=ABbffyVQ0OeEgVMDODRqMUvzGV7LmmFNdcrJ571Gw82hw=&xsec_source="]
    ],
    tips: ["山顶视野最好，普通步速从南门上去约需半小时。", "晴天傍晚更出片，但热门机位要稍微等一等。", "下山后可步行接市民中心、中心书城一带。"],
    image: "https://img.pconline.com.cn/images/upload/upc/tx/itbbs/1707/22/c12/53427318_1500698665382_mthumb.jpg",
    source: "https://www.sgss8.cc/tpdq/935175/"
  },
  {
    id: "nantou",
    name: "南头古城",
    category: "人文",
    area: "南山",
    lat: 22.5406,
    lng: 113.9233,
    duration: "2–4 小时",
    best: "午后到入夜",
    transit: "地铁 12 号线中山公园站",
    summary: "老城肌理、展览和小店混在一起，适合没有明确目的地地闲逛。",
    description: "南头古城不是规整的仿古街，更像一片仍在生长的城市切片。城门、巷道、展览空间与咖啡店彼此穿插，最好的玩法是放慢速度走进支巷。下午去能看清建筑细节，天黑后招牌亮起又是另一种气氛。",
    tips: ["不要只走主街，支巷里的尺度和生活感更有意思。", "小型展览更替较快，到场后再看当天开放情况。", "可以和附近的中山公园排在同一个半日。"],
    image: "https://ak-d.tripcdn.com/images/1mi4x224x99ddsjfgA082_W_640_0_R5_Q80.jpg?proc=source%2Ftrip",
    source: "https://www.trip.com/moments/detail/shenzhen-26-145800237/"
  },
  {
    id: "seaworld",
    name: "海上世界·明华轮及广场",
    category: "城市",
    area: "南山",
    lat: 22.4837,
    lng: 113.9153,
    duration: "3–4 小时",
    best: "傍晚到夜间",
    transit: "地铁 2 / 8 号线海上世界站",
    summary: "围绕明华轮看广场夜景、逛商业街和吃晚餐。",
    description: "这个标记对应明华轮与周边广场、商业街，适合看船体外观、逛街和用餐。海上世界文化艺术中心已单独标注，可以先去那里看展和滨海建筑，傍晚再到广场。明华轮是这里的地标，不能把它当作可直接登船出海的游轮项目。",
    tips: ["文化艺术中心与广场是不同游览点，看展请查看艺术中心详情。", "热门餐厅周末可能排队，先取号再逛会更省时间。", "喷泉或活动是否举行，以当天现场公告为准。"],
    image: "https://newbbs-fd.zol-img.com.cn/t_s1200x5000/g7/M00/0F/08/ChMkLGVN7k-IH613AAWBXHXsn4IAAW8ZgDntuUABYF0996.jpg",
    source: "https://bbs.zol.com.cn/dcbbs/d232_884395.html"
  },
  {
    id: "huaqiangbei",
    name: "华强北",
    category: "城市",
    area: "福田",
    lat: 22.5435,
    lng: 114.0859,
    duration: "2–4 小时",
    best: "工作日下午",
    transit: "地铁 2 / 7 号线华强北站",
    summary: "电子市场、高密度商业和街头人流，最能感受深圳速度的一站。",
    description: "华强北适合带着好奇心逛，但不适合把行程排得太精确。不同楼层和市场各有侧重，先沿主街感受密度，再挑一两栋感兴趣的商场进去。第一次去以观察和体验为主，不急着购买反而更轻松。",
    tips: ["工作日下午档口更齐，周末部分专业市场活跃度较低。", "小商品先问清规格和售后，再决定是否购买。", "主街夜景和白天市场是两种体验，可停留到亮灯。"],
    image: "https://www.eyeshenzhen.com/pic/2025-07/01/31595469_e295ae59-4395-4e0d-b4a6-2e10ce9cb323.jpg",
    source: "https://www.eyeshenzhen.com/content/2025-07/01/content_31595469.htm"
  },
  {
    id: "octloft",
    name: "华侨城创意文化园",
    category: "人文",
    area: "南山",
    lat: 22.5366,
    lng: 113.9949,
    duration: "2–3 小时",
    best: "下午",
    transit: "地铁 1 号线侨城东站",
    summary: "旧厂房、树荫和设计小店，适合一段松弛的下午。",
    description: "OCT-LOFT 的魅力在于低密度：红砖旧厂房、树荫、小型展览与独立店铺散落在园区里。这里不需要打卡清单，挑一个下午慢慢走，遇到喜欢的展览或店再停下来就好。",
    tips: ["部分店铺开门较晚，午饭后到达更合适。", "展览和活动更替频繁，现场遇到什么就看什么。", "可和附近华侨城片区一起安排，但不要塞得太满。"],
    image: "https://i.pinimg.com/736x/b4/72/57/b47257e1bab901bd5537647c41e518b0.jpg",
    source: "https://at.pinterest.com/pin/oct-loft-shenzhen--424042121141733971/"
  },
  {
    id: "dapeng",
    name: "大鹏所城",
    category: "人文",
    area: "大鹏",
    lat: 22.5968,
    lng: 114.4795,
    duration: "半天",
    best: "上午到午后",
    transit: "建议公交 / 网约车组合",
    summary: "深圳东部的古城巷道，适合与较场尾组合成一趟整日行。",
    description: "大鹏所城距离中心区较远，值得单独留出半天到一天。城内巷道、城门和传统建筑适合慢慢走，附近较场尾可补上海边体验。与大梅沙虽然都在东部，但同一天连走会比较赶。",
    tips: ["把交通时间算进当天行程，尽量早出发。", "古城石板路较多，穿好走的鞋比造型更重要。", "如再去较场尾，预留返程拥堵时间。"],
    image: "https://ak-d.tripcdn.com/images/1mi6l12000oaytciw2198.jpg?proc=source%2Ftrip",
    source: "https://jp.trip.com/moments/theme/poi-dapeng-ancient-city-83236-comprehensive-guides-993136/"
  },
  {
    id: "shenzhenbay",
    name: "深圳湾公园",
    category: "海边",
    area: "南山",
    lat: 22.507,
    lng: 113.9429,
    duration: "2–4 小时",
    best: "日落前后",
    transit: "地铁 9 号线深圳湾公园站",
    summary: "海风、草地、长距离步道，最适合给行程留一点空白。",
    description: "深圳湾公园很长，不必追求一次走完。第一次去可以从地铁站附近开始，沿海走到觉得刚好的位置再折返。天气舒服时，带点喝的坐在草地上，比连续赶景点更能体会深圳的滨海节奏。",
    tips: ["日落前一小时到，光线和体感通常都更友好。", "共享单车的可骑行区域以现场规则为准。", "与海上世界、人才公园可按兴趣拆成不同傍晚。"],
    image: "https://www.asiaodysseytravel.com/images/china-tours/group-tours/shenzhen-bay-park-700-4.jpg",
    source: "https://www.asiaodysseytravel.com/guangzhou-tours/shenzhen-day-trip.html"
  }
];

places.forEach(place => place.city = "深圳");
places.push(...extraPlaces);
places.forEach(place => {
  if (nanshanGuides[place.id]) Object.assign(place, nanshanGuides[place.id]);
  if (photoGalleries[place.id]?.length) {
    place.photos = photoGalleries[place.id];
    place.image = place.photos[0].src;
  }
});
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
const app = document.querySelector("#app");
const mapTemplate = document.querySelector("#mapViewTemplate");
const detailTemplate = document.querySelector("#detailViewTemplate");
const fitMapButton = document.querySelector("#fitMapButton");
const printButton = document.querySelector("#printButton");
let map = null;
let markers = new Map();
let distanceLayers = [];
let routeLayers = [];
let currentShundeRoute = "all";
let currentFilter = "全部";
let currentCity = "深圳";
function matchesPlace(place) {
  if (place.city !== currentCity) return false;
  if (currentFilter === "全部") return true;
  if (currentFilter === "高频美食") return Number.isFinite(place.foodRank);
  if (currentFilter === "容桂美食") return place.rongguiFood === true;
  return place.category === currentFilter;
}
function hasMapPoint(place) {
  return Number.isFinite(place.lat) && Number.isFinite(place.lng);
}
function foodHtml(city) {
  return destinationGuides[city].foods.map(([name, text]) => '<p><strong>' + name + '</strong><br>' + text + '</p>').join("");
}
let cityBounds = null;

async function drawDistrictBoundaries(targetMap) {
  try {
    const response = await fetch("shenzhen-districts.json");
    if (!response.ok) throw new Error("District boundaries unavailable");
    const data = await response.json();
    if (map !== targetMap || currentCity !== "深圳") return;
    const pane = targetMap.createPane("districtBoundary");
    pane.style.zIndex = 340;
    pane.style.pointerEvents = "none";
    L.geoJSON(data, {pane:"districtBoundary", interactive:false,
      style:{color:"#ffffff", weight:4, opacity:0.85, fill:false}}).addTo(targetMap);
    L.geoJSON(data, {pane:"districtBoundary", interactive:false,
      style:{color:"#526b83", weight:1.5, opacity:0.9, dashArray:"6 4", fill:false}
    }).addTo(targetMap);
    data.features.forEach(feature => {
      const center = feature.properties.centroid || feature.properties.center;
      if (!center) return;
      const label = document.createElement("span");
      label.textContent = feature.properties.name;
      L.marker([center[1], center[0]], {
        pane:"districtBoundary", interactive:false, keyboard:false,
        icon:L.divIcon({className:"district-label", html:label, iconSize:[72,24], iconAnchor:[36,12]})
      }).addTo(targetMap);
    });
    targetMap.attributionControl.addAttribution('<a href="https://geo.datav.aliyun.com/areas_v3/bound/440300_full.json" target="_blank" rel="noreferrer">区界：DataV（行政区示意）</a>');
  } catch (error) {
    console.warn("区界暂时未加载", error);
  }
}

async function drawCityBoundary(targetMap) {
  try {
    const response = await fetch("shenzhen-boundary.json");
    if (!response.ok) throw new Error("Boundary unavailable");
    const data = await response.json();
    if (map !== targetMap || currentCity !== "深圳") return;
    const polygons = data.features.flatMap(feature =>
      feature.geometry.type === "MultiPolygon" ? feature.geometry.coordinates : [feature.geometry.coordinates]);
    const rings = polygons.flatMap(polygon => polygon.map(ring => ring.map(([lng, lat]) => [lat, lng])));
    targetMap.createPane("cityBoundary");
    targetMap.getPane("cityBoundary").style.zIndex = 350;
    targetMap.getPane("cityBoundary").style.pointerEvents = "none";
    L.polygon([[[85,-180],[85,180],[-85,180],[-85,-180]], ...rings], {
      pane: "cityBoundary", stroke: false, fillColor: "#e8edf0", fillOpacity: 0.65,
      fillRule: "evenodd", interactive: false
    }).addTo(targetMap);
    L.geoJSON(data, {pane: "cityBoundary", interactive: false,
      style: {color: "#fff", weight: 7, opacity: 0.95, fill: false}}).addTo(targetMap);
    const outline = L.geoJSON(data, {pane: "cityBoundary", interactive: false,
      style: {color: "#007f80", weight: 3, opacity: 1, fill: false}}).addTo(targetMap);
    cityBounds = outline.getBounds();
    targetMap.attributionControl.addAttribution('<a href="https://geo.datav.aliyun.com/areas_v3/bound/440300.json" target="_blank" rel="noreferrer">市界：阿里云 DataV（示意）</a>');
    const legend = L.control({position: "topleft"});
    legend.onAdd = () => {
      const element = L.DomUtil.create("div", "boundary-legend");
      element.innerHTML = '<span></span>深圳市界 <i class="district-key"></i>区界<small>市外区域已淡化 · 边界仅供旅行参考</small>';
      return element;
    };
    legend.addTo(targetMap);
    if (currentFilter === "全部") fitAll();
  } catch (error) {
    console.warn("深圳市界暂时未加载", error);
  }
}

function distanceKm(a, b) {
  const rad = value => value * Math.PI / 180;
  const earth = 6371;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const s = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return earth * 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s));
}

function formatDistance(km) {
  return km < 1 ? `${Math.round(km * 1000)} 米` : `${km.toFixed(1)} 公里`;
}

function route() {
  const match = location.hash.match(/^#\/place\/([a-z0-9-]+)$/);
  if (match) renderDetail(match[1]);
  else renderMap();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderMap() {
  if (map) { map.remove(); map = null; }
  app.replaceChildren(mapTemplate.content.cloneNode(true));
  fitMapButton.hidden = false;
  printButton.hidden = currentCity !== "顺德";
  currentFilter = "全部";
  const selector = document.querySelector("#citySelect");
  selector.value = currentCity;
  selector.addEventListener("change", () => { currentCity = selector.value; renderMap(); });
  document.querySelector("#cityIntro").textContent = destinationGuides[currentCity].intro;
  document.querySelector("#foodList").innerHTML = foodHtml(currentCity);
  document.querySelector("#foodGuide").hidden = !destinationGuides[currentCity].foods.length;
  document.querySelector("#mapNoteText").textContent = currentCity === "顺德" ? "彩线为建议顺序，不是逐路口导航" : "地图距离为直线估算";
  renderRoutePlanner();
  renderCards();
  bindFilters();
  requestAnimationFrame(initMap);
}

function renderRoutePlanner() {
  const panel = document.querySelector("#routePlanner");
  if (!panel || currentCity !== "顺德") return;
  panel.hidden = false;
  panel.innerHTML = `
    <div class="route-heading"><div><p class="eyebrow">地图上的省力动线</p><h2>两日路线 · D2 二选一</h2></div><span>实线步行 · 虚线打车</span></div>
    <div class="route-switcher">
      <button class="route-choice ${currentShundeRoute === "all" ? "active" : ""}" data-route="all">全部路线</button>
      ${shundeRoutes.map(route => `<button class="route-choice ${currentShundeRoute === route.id ? "active" : ""}" data-route="${route.id}">${route.day}</button>`).join("")}
    </div>
    <div class="route-cards">
      ${shundeRoutes.map(route => `<article class="mini-route" style="--route-color:${route.color}">
        <div class="mini-route-title"><b>${route.day}</b><strong>${route.name}</strong></div>
        <p>${route.summary}</p>
        <ol>${route.stops.map((id, index) => {
          const place = places.find(item => item.id === id);
          return `<li><a href="#/place/${id}">${place?.name || id}</a>${route.times?.[index] ? `<em>${route.times[index]}</em>` : ""}${index < route.segments.length ? `<small>${route.segments[index]}</small>` : ""}</li>`;
        }).join("")}</ol>
      </article>`).join("")}
    </div>
    <section class="food-frequency" aria-label="顺德高频美食统计">
      <div class="food-frequency-heading"><div><p class="eyebrow">本轮 24 篇提及频次</p><h3>高频美食落点</h3></div><span>不是口味评分</span></div>
      <div class="food-frequency-list">${shundeFoodResearch.ranking.map(item => {
        const place = item.placeId ? places.find(place => place.id === item.placeId) : null;
        const title = `<b>#${item.rank} ${item.food}</b><strong>${item.mentions}/${shundeFoodResearch.sampleSize}</strong>`;
        return place
          ? `<a href="#/place/${place.id}">${title}<small>${item.note}</small></a>`
          : `<div>${title}<small>${item.note}</small></div>`;
      }).join("")}</div>
      <details><summary>统计口径与 24 篇来源</summary><p>${shundeFoodResearch.method}</p><ol>${shundeFoodResearch.sources.map(([title, url]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(title)} ↗</a></li>`).join("")}</ol></details>
    </section>
    <div class="route-alert"><b>路线选择原则</b><span>国泰南路目前按 1–6 号一带作区域锚点，收到酒店全名后可校正；D2-A 大良线与 D2-B 容桂线二选一，不在一天内来回跨区。D1 琼花戏楼是主餐，赋狮楼有胃口才去。</span></div>
  `;
  panel.querySelector(".route-switcher").addEventListener("click", event => {
    const button = event.target.closest("[data-route]");
    if (!button) return;
    currentShundeRoute = button.dataset.route;
    panel.querySelectorAll(".route-choice").forEach(item => item.classList.toggle("active", item === button));
    drawShundeRoutes();
    fitShundeRoute();
  });
}

function bindFilters() {
  document.querySelector("#filters").addEventListener("click", event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    currentFilter = button.dataset.filter;
    document.querySelectorAll(".filter").forEach(item => item.classList.toggle("active", item === button));
    renderCards();
    updateMarkerVisibility();
  });
}

function renderCards() {
  const list = document.querySelector("#placeList");
  if (!list) return;
  const shown = places.filter(matchesPlace);
  list.innerHTML = shown.map(place => `
    <a class="place-card" href="#/place/${place.id}" data-place-id="${place.id}">
      ${place.image ? '<img src="' + place.image + '" alt="' + place.name + '实景" loading="lazy" referrerpolicy="no-referrer" />' : '<div class="place-text-cover">' + place.city + '<small>实景照片待补</small></div>'}
      <div class="card-body">
        <div class="card-row"><h2>${place.name}</h2><span class="tag">${place.foodRank ? `高频 #${place.foodRank}` : place.rongguiFood ? "容桂美食" : place.category}</span></div>
        <p>${place.summary}</p>
        <div class="card-meta"><span>${place.pendingLocation ? "位置待核" : place.area}</span><span>${place.foodMentions || place.duration}</span></div>
      </div>
    </a>
  `).join("");

  list.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => {
      img.removeAttribute("src");
      img.alt = `${img.alt}（图片暂未加载）`;
    }, { once: true });
  });
  list.querySelectorAll(".place-card").forEach(card => {
    card.addEventListener("mouseenter", () => focusMarker(card.dataset.placeId));
    card.addEventListener("mouseleave", clearMarkerFocus);
  });
}

function initMap() {
  const fallback = document.querySelector("#mapFallback");
  if (!window.L) {
    fallback.hidden = false;
    return;
  }
  if (map) { map.remove(); map = null; }
  markers = new Map();
  distanceLayers = [];
  routeLayers = [];
  cityBounds = null;
  map = L.map("map", { zoomControl: false, minZoom: 8 }).setView([22.552, 114.06], 10);
  L.control.zoom({ position: "topright" }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map).on("tileerror", () => { fallback.hidden = false; });

  const numberedPlaces = places.filter(place => place.city === currentCity && hasMapPoint(place));
  places.filter(hasMapPoint).forEach(place => {
    const index = numberedPlaces.findIndex(item => item.id === place.id);
    const icon = L.divIcon({
      className: place.foodRank ? "custom-pin food-pin" : place.rongguiFood ? "custom-pin ronggui-pin" : "custom-pin",
      html: `<div class="pin-wrap"><div class="pin-dot"><span>${index >= 0 ? String(index + 1).padStart(2, "0") : "·"}</span></div><div class="pin-label">${place.pinName || place.name}</div></div>`,
      iconSize: [84, 57],
      iconAnchor: [42, 35]
    });
    const marker = L.marker([place.lat, place.lng], { icon, title: place.name }).addTo(map);
    marker.on("click", () => selectOnMap(place));
    markers.set(place.id, marker);
  });
  updateMarkerVisibility();
  if (currentCity === "深圳") {
    L.circleMarker([22.591757, 113.994782], {
      radius: 9, color: "#ffffff", weight: 3,
      fillColor: "#7c3aed", fillOpacity: 1, interactive: false
    }).addTo(map);
  }
  if (currentCity === "深圳") {
    drawCityBoundary(map);
    drawDistrictBoundaries(map);
  }
  if (currentCity === "顺德") drawShundeRoutes();
}

function fitAll() {
  if (!map) return;
  if (currentCity === "深圳" && currentFilter === "全部" && cityBounds) {
    map.fitBounds(cityBounds, {padding: [35, 45]});
    return;
  }
  const visible = places.filter(place => matchesPlace(place) && hasMapPoint(place));
  if (visible.length) map.fitBounds(visible.map(place => [place.lat, place.lng]), { padding: [42, 42] });
}

function updateMarkerVisibility() {
  if (!map) return;
  places.forEach(place => {
    const marker = markers.get(place.id);
    if (!marker) return;
    const visible = matchesPlace(place);
    if (visible && !map.hasLayer(marker)) marker.addTo(map);
    if (!visible && map.hasLayer(marker)) marker.removeFrom(map);
  });
  clearDistanceLayers();
  if (currentCity === "顺德") drawShundeRoutes();
  fitAll();
}

function clearRouteLayers() {
  if (!map) return;
  routeLayers.forEach(layer => map.removeLayer(layer));
  routeLayers = [];
}

function drawShundeRoutes() {
  clearRouteLayers();
  if (!map || currentCity !== "顺德" || currentFilter !== "全部") return;
  const shownRoutes = currentShundeRoute === "all"
    ? shundeRoutes
    : shundeRoutes.filter(route => route.id === currentShundeRoute);
  shownRoutes.forEach(route => {
    route.stops.slice(0, -1).forEach((id, index) => {
      const from = places.find(item => item.id === id);
      const to = places.find(item => item.id === route.stops[index + 1]);
      if (!from || !to || !hasMapPoint(from) || !hasMapPoint(to)) return;
      const mode = route.segments[index] || "建议转场";
      const isRide = mode.includes("网约车");
      const line = L.polyline([[from.lat, from.lng], [to.lat, to.lng]], {
        color: route.color,
        weight: isRide ? 4 : 5,
        opacity: .9,
        dashArray: isRide ? "8 9" : null,
        lineCap: "round"
      }).addTo(map);
      line.bindTooltip(`${route.day} · ${mode}`, { sticky: true, className: "route-map-label" });
      routeLayers.push(line);
    });
  });
}

function fitShundeRoute() {
  if (!map) return;
  const routes = currentShundeRoute === "all" ? shundeRoutes : shundeRoutes.filter(route => route.id === currentShundeRoute);
  const points = routes.flatMap(route => route.stops)
    .map(id => places.find(place => place.id === id))
    .filter(place => place && hasMapPoint(place))
    .map(place => [place.lat, place.lng]);
  if (points.length) map.fitBounds(points, { padding: [52, 52] });
}

function selectOnMap(place) {
  clearMarkerFocus();
  focusMarker(place.id);
  document.querySelectorAll(".place-card").forEach(card => card.classList.toggle("active", card.dataset.placeId === place.id));
  const card = document.querySelector(`[data-place-id="${place.id}"]`);
  card?.scrollIntoView({ behavior: "smooth", block: "center" });
  drawNearestDistances(place);
  map.flyTo([place.lat, place.lng], Math.max(map.getZoom(), 11), { duration: .65 });
}

function focusMarker(id) {
  markers.forEach((marker, markerId) => marker.getElement()?.classList.toggle("active", markerId === id));
}

function clearMarkerFocus() {
  markers.forEach(marker => marker.getElement()?.classList.remove("active"));
}

function clearDistanceLayers() {
  if (!map) return;
  distanceLayers.forEach(layer => map.removeLayer(layer));
  distanceLayers = [];
}

function drawNearestDistances(place) {
  clearDistanceLayers();
  const nearest = places
    .filter(item => item.id !== place.id && matchesPlace(item) && hasMapPoint(item) && hasMapPoint(place))
    .map(item => ({ item, km: distanceKm(place, item) }))
    .sort((a, b) => a.km - b.km)
    .slice(0, 3);
  nearest.forEach(({ item, km }) => {
    const line = L.polyline([[place.lat, place.lng], [item.lat, item.lng]], { color: "#ff7a59", weight: 2, dashArray: "6 7", opacity: .82 }).addTo(map);
    line.bindTooltip(formatDistance(km), { permanent: true, direction: "center", className: "distance-label" }).openTooltip();
    distanceLayers.push(line);
  });
}

function renderDetail(id) {
  if (map) { map.remove(); map = null; }
  const place = places.find(item => item.id === id);
  fitMapButton.hidden = true;
  printButton.hidden = true;
  app.replaceChildren(detailTemplate.content.cloneNode(true));
  const page = document.querySelector("#detailPage");
  if (!place) {
    page.innerHTML = `<div class="error-page"><h1>没有找到这个地点</h1><a class="ghost-button" href="#/">返回地图</a></div>`;
    return;
  }
  const distances = hasMapPoint(place) ? places
    .filter(item => item.id !== place.id && item.city === place.city && hasMapPoint(item))
    .map(item => ({ item, km: distanceKm(place, item) }))
    .sort((a, b) => a.km - b.km) : [];
  page.innerHTML = `
    <header class="detail-hero">
      ${place.image ? '<img src="' + place.image + '" alt="' + place.name + '实景" referrerpolicy="no-referrer" />' : ''}
      <div class="hero-content">
        <a class="back-link" href="#/">← 返回全城地图</a>
        <p class="eyebrow">${place.area} · ${place.category}</p>
        <h1>${place.name}</h1>
        <p>${place.summary}</p>
      </div>
    </header>
    <div class="detail-content">
      <section class="detail-main">
        <div class="facts">
          <div class="fact"><span>建议停留</span><strong>${place.duration}</strong></div>
          <div class="fact"><span>推荐时段</span><strong>${place.best}</strong></div>
          <div class="fact"><span>怎么到</span><strong>${place.transit}</strong></div>
        </div>
        ${place.metro ? `<section class="metro-guide" aria-label="从出发点乘地铁">
          <h2>从出发点乘地铁</h2>
          <p class="route-origin">出发点 → 塘朗站</p>
          <ol class="metro-steps">${place.metro.map(([line, segment, direction]) => `<li><b class="line-badge line-${line}">${line} 号线</b><div><strong>${segment}</strong><span>${direction}</span></div></li>`).join('')}</ol>
          <p class="last-walk"><strong>出站后怎么走</strong><br>${place.lastWalk}</p>
          <p class="route-note">这是便于照着走的一条路线，不保证实时最快。步行时间为估算；出口开放、末班车与当天换乘请以导航和车站指引为准。线路核对：2026-09-16。<a href="${metroReference}" target="_blank" rel="noreferrer">官方线路参考 ↗</a></p>
        </section>` : ''}
        ${place.features ? `<h2>这个地方有什么特点</h2><p>${place.features}</p><h2>可玩性 · 适合怎样逛</h2><p>${place.playability}</p>` : ''}
        <h2>怎么玩</h2>
        ${place.itinerary ? `<ol class="itinerary-list">${place.itinerary.map(step=>`<li>${step}</li>`).join('')}</ol>` : `<p>${place.description}</p>`}
        ${place.photos ? `<section class="photo-section" aria-label="景点实景照片"><h2>实景照片</h2><p class="photo-note">来自游客或摄影作者公开发布的实拍，保留原图内容。点击可放大；照片中的展览、装置与天气不代表出行当天。</p><div class="photo-grid">${place.photos.map(photo=>`<figure><a href="${escapeHtml(photo.src)}" target="_blank" rel="noreferrer" aria-label="放大：${escapeHtml(photo.caption)}"><img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.caption)}" loading="lazy" /></a><figcaption>${escapeHtml(photo.caption)}<br><a href="${escapeHtml(photo.source)}" target="_blank" rel="noreferrer">${escapeHtml(photo.sourceLabel || (photo.source.includes('xiaohongshu.com') ? '小红书' : '来源'))} · ${escapeHtml(photo.author)} ↗</a></figcaption></figure>`).join('')}</div></section>` : ''}
        ${place.food ? '<h2>附近怎么吃</h2><p>' + place.food + '</p>' : ''}
        ${destinationGuides[place.city].foods.length ? '<h2>' + place.city + '吃什么</h2><div class="detail-food">' + foodHtml(place.city) + '</div>' : ''}
        <h2>到场前记住这三件事</h2>
        <ol class="play-list">${place.tips.map((tip, index) => `<li><b>${index + 1}</b><span>${tip}</span></li>`).join("")}</ol>
        ${place.researchSources ? `<section class="research-sources"><h2>调研来源与交叉核对</h2><p>路线结论综合了累计 35 篇小红书游记/评论及官方、地图与游客资料；以下列出这个地点最直接的复核入口。</p><ul>${place.researchSources.map(([title, url]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noreferrer">${escapeHtml(title)} ↗</a></li>`).join("")}</ul></section>` : ''}
      </section>
      <aside class="distance-box">
        <h2>离其他地点多远</h2>
        <p>直线距离，只用于快速判断区域关系</p>
        <div class="distance-list">
          ${distances.map(({ item, km }) => `<a class="distance-link" href="#/place/${item.id}"><span>${item.name}</span><span>${formatDistance(km)}</span></a>`).join("")}
        </div>
        <a class="source-link" href="${place.source}" target="_blank" rel="noreferrer">${place.photos ? "原有地点参考资料" : place.image ? "查看原图参考来源" : "旅游参考资料"} ↗</a>
      </aside>
    </div>
  `;
  currentCity = place.city;
  page.querySelector(".detail-hero img")?.addEventListener("error", event => event.currentTarget.style.display = "none", { once: true });
}

fitMapButton.addEventListener("click", () => {
  if (!location.hash || location.hash === "#/") fitAll();
  else location.hash = "#/";
});
printButton.addEventListener("click", () => window.print());
window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
