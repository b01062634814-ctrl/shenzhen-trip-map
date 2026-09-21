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
  intro: "已复核累计 35 篇小红书游记/评论及官方、地图和游客资料。D1 从大良钟楼站单向走老城，D2 从国泰南路住宿区走公园—博物馆—午休—欢乐海岸；地图实线步行、虚线打车。",
  foods: [
    ["D1 主餐：琼花戏楼", "华盖里四巷 14 号；优先按演出时段预约。它与赋狮楼二选一顿大餐，不连吃。"],
    ["D1 早餐：金榜上街少量探索", "双皮奶、姜撞奶、水牛奶或炸牛奶只选一两样分食；甜度和口味评价分歧大，以现场为准。"],
    ["晚餐备选：赋狮楼粥底火锅", "碧鉴路 56 号；午餐后真饿再去。鱼片或鸡肉少量分批涮，最后尝粥底。"],
    ["早餐支线：大围公", "大围六街三巷 10 号之一；粥、肉碎肠粉、油条、豆浆。只在 D2 愿意早起时加入。"],
    ["多人备选：顺峰山庄", "更适合多人分菜；两个人先问茶位、服务费和小份菜，不列入省力主线。"],
    ["关于预制菜", "龙的酒楼不纳入路线。其他门店也不做“完全无预制”保证；介意时现场逐道询问制作与备料方式。"]
  ]
};
