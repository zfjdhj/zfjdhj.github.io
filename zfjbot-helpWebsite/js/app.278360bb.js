(function(n){function i(i){for(var c,m,d=i[0],a=i[1],r=i[2],s=0,u=[];s<d.length;s++)m=d[s],Object.prototype.hasOwnProperty.call(o,m)&&o[m]&&u.push(o[m][0]),o[m]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(n[c]=a[c]);p&&p(i);while(u.length)u.shift()();return t.push.apply(t,r||[]),e()}function e(){for(var n,i=0;i<t.length;i++){for(var e=t[i],c=!0,d=1;d<e.length;d++){var a=e[d];0!==o[a]&&(c=!1)}c&&(t.splice(i--,1),n=m(m.s=e[0]))}return n}var c={},o={app:0},t=[];function m(i){if(c[i])return c[i].exports;var e=c[i]={i:i,l:!1,exports:{}};return n[i].call(e.exports,e,e.exports,m),e.l=!0,e.exports}m.m=n,m.c=c,m.d=function(n,i,e){m.o(n,i)||Object.defineProperty(n,i,{enumerable:!0,get:e})},m.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},m.t=function(n,i){if(1&i&&(n=m(n)),8&i)return n;if(4&i&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(m.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&i&&"string"!=typeof n)for(var c in n)m.d(e,c,function(i){return n[i]}.bind(null,c));return e},m.n=function(n){var i=n&&n.__esModule?function(){return n["default"]}:function(){return n};return m.d(i,"a",i),i},m.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},m.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],a=d.push.bind(d);d.push=i,d=d.slice();for(var r=0;r<d.length;r++)i(d[r]);var p=a;t.push([0,"chunk-vendors"]),e()})({0:function(n,i,e){n.exports=e("56d7")},1975:function(n,i,e){},"56d7":function(n,i,e){"use strict";e.r(i);e("e260"),e("e6cf"),e("cca6"),e("a79d");var c=e("7a23"),o=(e("a4d3"),e("e01a"),Object(c["h"])("img",{src:"http://resource.zfjdhj.cn/images/ico/pcr.zfjdhj.cn.png",style:{width:"40px",height:"40px"}},null,-1)),t=Object(c["g"])(" 当前适配移动端，点此访问PC端 "),m={action:"/"},d=Object(c["g"])("搜索结果");function a(n,i,e,a,r,p){var s=Object(c["z"])("van-nav-bar"),u=Object(c["z"])("van-notice-bar"),l=Object(c["z"])("van-search"),_=Object(c["z"])("van-sticky"),g=Object(c["z"])("van-button"),b=Object(c["z"])("van-cell"),f=Object(c["z"])("van-cell-group"),v=Object(c["z"])("van-collapse-item"),j=Object(c["z"])("van-collapse");return Object(c["u"])(),Object(c["f"])(c["a"],null,[Object(c["h"])(s,{title:"猫猫食用手册"},{left:Object(c["E"])((function(){return[o]})),_:1}),Object(c["h"])(u,{mode:"link","left-icon":"info-o",onClick:a.noticeBarClick},{default:Object(c["E"])((function(){return[t]})),_:1},8,["onClick"]),Object(c["h"])(_,null,{default:Object(c["E"])((function(){return[Object(c["h"])("form",m,[Object(c["h"])(l,{modelValue:a.value,"onUpdate:modelValue":i[1]||(i[1]=function(n){return a.value=n}),shape:"round",background:"#FFBB77",placeholder:"请输入搜索关键词",onSearch:i[2]||(i[2]=function(n){return a.onSearch(a.value)}),onCancel:a.onCancel},null,8,["modelValue","onCancel"])])]})),_:1}),(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(a.plugins_data,(function(n){return Object(c["F"])((Object(c["u"])(),Object(c["f"])("div",{key:n.id},[Object(c["h"])(g,{type:"primary",block:""},{default:Object(c["E"])((function(){return[Object(c["g"])(Object(c["A"])(n.plugins_type_name),1)]})),_:2},1024),Object(c["h"])(j,{modelValue:n.plugins_type_id,"onUpdate:modelValue":function(i){return n.plugins_type_id=i},accordion:"true",border:"false"},{default:Object(c["E"])((function(){return[(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(n.plugins_list,(function(n,i){return Object(c["u"])(),Object(c["f"])(v,{key:n.id,name:i},{title:Object(c["E"])((function(){return[Object(c["h"])("div",null,Object(c["A"])(n.plugin_name),1)]})),default:Object(c["E"])((function(){return[Object(c["h"])(f,{border:"false"},{default:Object(c["E"])((function(){return[Object(c["h"])(b,{title:"指令",value:"功能"}),(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(n.plugin_commands,(function(n){return Object(c["u"])(),Object(c["f"])(b,{key:n.id,title:n.command,value:n.description,onClick:function(i){return p.doCopy(n.command)}},null,8,["title","value","onClick"])})),128))]})),_:2},1024)]})),_:2},1032,["name"])})),128))]})),_:2},1032,["modelValue","onUpdate:modelValue"])],512)),[[c["C"],a.isRes]])})),128)),Object(c["F"])(Object(c["h"])("div",null,[Object(c["h"])(g,{icon:"arrow-left","icon-position":"left",type:"primary",block:"",onClick:a.onCancel},{default:Object(c["E"])((function(){return[d]})),_:1},8,["onClick"]),Object(c["h"])(f,null,{default:Object(c["E"])((function(){return[Object(c["h"])(b,{title:"指令",value:"功能"}),(Object(c["u"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(a.res_list.data,(function(n){return Object(c["u"])(),Object(c["f"])(b,{key:n.id,title:n.command,value:n.description,onClick:function(i){return p.doCopy(n.command)}},null,8,["title","value","onClick"])})),128))]})),_:1})],512),[[c["C"],!a.isRes]])],64)}e("c975");var r=e("53ca"),p=e("d399"),s={name:"App",setup:function(){var n=Object(c["w"])([{plugins_type_id:"1",plugins_type_name:"会战",plugins_list:[{plugin_name:"会战管理",plugin_service_name:"Yobot",plugin_direction:"会战核心功能",plugin_commands:[{command:"手册",description:"查看公会战使用手册"},{command:"面板",description:"进入公会战面板"},{command:"登录",description:"登录进入Web模式"},{command:"重置密码",description:"随机生成一个新密码（不发链接）"},{command:"创建国服公会",description:"日/韩/台/国，创建后可在后台修改"},{command:"加入公会[@某人]",description:"加入到公会名单，如果有at则为加入他人"},{command:"(管理员)加入全部成员",description:"所有群成员加入到公会名单"},{command:"报刀2000000 [@某人] [昨日] [:留言]",description:"对boss造成伤害但未击败时用，记录伤害，可以使用 200w/200万/2000k 等（一般公会精确到万即可）\n如果有at则为代报，有冒号则为留言\n如果有“昨日”则将记录添加到前一天"},{command:"尾刀 [@某人] [昨日] [:留言]",description:"对boss造成伤害并击败时用，记录伤害\n如果有at则为代报，有冒号则为留言\n如果有“昨日”则将记录添加到前一天"},{command:"SL [@某人] [？]",description:"挑战boss强制取消后用，记录本日SL，用“？”查询今日是否已 SL\n如果有at则为代报"},{command:"撤销",description:"撤销上一次报刀（非管理员只能撤销自己的记录）"},{command:"状态",description:"显示boss状态"},{command:"预约1 [:留言]",description:"预约boss，当boss出现时通知，有冒号则为留言"},{command:"挂树 [:留言]",description:"挂树，当boss被击败时通知"},{command:"查1 / 查树",description:"查询预约boss的成员，查询挂树的成员"},{command:"取消预约1 / 取消1",description:"取消预约"},{command:"申请出刀",description:"锁定boss，提醒后面申请出刀的人有人正在挑战boss"},{command:"锁定:留言",description:"锁定boss，提醒后面申请出刀的人，冒号后为留言"},{command:"解锁",description:"解锁boss，其他人可以继续申请"}],plugin_notice:""},{plugin_name:"自动报刀",plugin_service_name:"clanbattle_info",plugin_direction:"自动报刀相关，前缀cbi可以替换为自动报刀",plugin_commands:[{command:"cbi 帮助",description:"获取帮助信息"},{command:"cbi 总表",description:"查询公会总表"},{command:"cbi 日总表 [n]",description:"查询公会日表, n表示会战第n天, 不带n参数默认为第1天"},{command:"cbi 日出刀表 [n]",description:"查询公会日表, n表示会战第n天, 不带n参数默认为第1天."},{command:"cbi boss出刀表 [n]",description:"查询boss出刀表, n为boss编号, 取值为1-5."},{command:"cbi boss状态",description:"查询boss状态"},{command:"cbi 状态",description:"查看插件当前状态"},{command:"cbi 检查成员",description:"检查公会成员是否全部有对应QQ号码"},{command:"cbi 绑定 游戏昵称 [bot/@某人]",description:"将指定游戏昵称绑定本qq号码或者指定qq号码, 适用于游戏昵称和群名片不匹配的情况, 加入bot表示将该昵称绑定为bot自己的qq号码. 如果游戏昵称有空格, 请将昵称放置在[]中"},{command:"cbi 解除绑定 游戏昵称",description:"解除绑定"},{command:"cbi 查看绑定",description:"查看当前的绑定列表"},{command:"cbi 绑定未知成员 bot/@某人",description:"将指定所有找不到对应qq的游戏昵称绑定给指定qq号码, 适用于部分成员不在群内的情况, bot表示将该昵称绑定为bot自己的qq号码,使用该功能必须参照下方常见问题解除yobot出刀限制"},{command:"cbi 解除绑定未知成员",description:"禁用上述功能"},{command:"cbi 继续报刀",description:"继续自动报刀, 当自动报刀因错误暂停时, 请在排除错误后使用该命令继续报刀"},{command:"cbi 暂停报刀",description:"暂停自动报刀"},{command:"cbi 重置推送进度",description:"重置推送进度, 下一次将从第一条出刀记录重新开始推送"},{command:"cbi 重置报刀进度",description:"重置报刀进度, 从第一条出刀记录重新同步报刀进度, 适用于清空yobot记录后需要重新开始报刀的情况"},{command:"初始化",description:"重新加载群数据, 修改config文件后可以使用本指令重新加载数据"}],plugin_notice:"使用自动报刀的公会, 不能有重名的成员, 插件无法区分同名会员. 如果插件提示未知游戏昵称, 需要使用绑定指令为指定游戏昵称绑定成员qq. 本插件不限制每个qq号码绑定的游戏昵称数量, 但请注意yobot本身的每账号每天3刀的限制, 有特殊需求请自行修改Yobot相关代码"},{plugin_name:"bot管理",plugin_service_name:"",plugin_direction:"",plugin_commands:[{command:"(管理员)退出此群",description:"命令机器人退出当前群聊"},{command:"version",description:"查看机器人版本"}],plugin_notice:"当管理员希望机器人离开群聊时，应该使用此条命令而不是直接踢出群聊，避免增加封号风险"}]},{plugins_type_id:"2",plugins_type_name:"查询",plugins_list:[{plugin_name:"会战附属功能",plugin_service_name:"",plugin_direction:"",plugin_commands:[{command:"pcr速查",description:"pcr的主要攻略和数据站速览"},{command:"bcr速查",description:"国服萌新攻略"},{command:"日/台/陆rank表",description:"查看各服rank推荐表"},{command:"黄骑充电表",description:"黄骑1动规律"},{command:"谁是xcw",description:"角色别称查询"},{command:"挖矿计算 +当前名次",description:"计算剩余可获得的奖励钻石"},{command:"一个顶俩",description:"台服接龙小游戏"},{command:"B/台服新闻",description:"显示最新的B/台服新闻"}],plugin_notice:""},{plugin_name:"公会排名查询",plugin_service_name:"epck",plugin_direction:"",plugin_commands:[{command:"会战排名+公会名/排名",description:"查看指定名字或指定排名的公会排名"},{command:"会战锁定+公会名",description:"绑定本群的公会"},{command:"会战解锁+公会名",description:"解绑本群的公会"},{command:"公会排名",description:"查询本群绑定的公会的排名信息"},{command:"(自动)公会排名推送",description:"每天早5点30分自动推送本群绑定的公会的排名信息"}],plugin_notice:"请在结束会战后取消公会绑定，并在下一次会战开始前重新绑定，否则非会战期间也会推送排名信息。"},{plugin_name:"会战报告",plugin_service_name:"离职报告",plugin_direction:"生成会战报告",plugin_commands:[{command:"生成离职报告",description:"生成一张离职报告"},{command:"生成会战报告[@某人]",description:"生成一张会战报告"}],plugin_notice:"为保证生成合理报告，会战期间尽量保证数据库正确，不要虾报刀"},{plugin_name:"活动日程",plugin_service_name:"日历",plugin_direction:"",plugin_commands:[{command:"日历",description:"查看本群订阅服务器日历"},{command:"[国台日]服日历",description:"查看指定服务器日程"},{command:"[国台日]服日历 on/off",description:"订阅/取消订阅指定服务器的日历推送"},{command:"日历 time 时:分",description:"设置日历推送时间"},{command:"日历 status",description:"查看本群日历推送设置"}],plugin_notice:""}]},{plugins_type_id:"3",plugins_type_name:"娱乐",plugins_list:[{plugin_name:"抽卡",plugin_service_name:"gacha",plugin_direction:"",plugin_commands:[{command:"猫猫单抽/十连/来一井",description:"模拟抽卡"},{command:"(管理员)氪金@氪金者",description:"增加一次抽一井的机会"},{command:"查看卡池",description:"查看当期up及出率"},{command:"切换卡池",description:"可切换B/台/日服卡池"},{command:"更新卡池",description:"卡池数据延迟时可以使用"}],plugin_notice:"一天只能抽一井，如需多抽，请使用氪金命令"},{plugin_name:"切噜语",plugin_service_name:"pcr-cherugo",plugin_direction:"",plugin_commands:[{command:"切噜一下 <文本>",description:"转换为切噜语"},{command:"切噜～♪<切噜语文本>",description:"切噜语翻译"}],plugin_notice:""},{plugin_name:"签到",plugin_service_name:"",plugin_direction:"",plugin_commands:[{command:"签到",description:"给主さま盖章章(随机图样哦)"}],plugin_notice:""},{plugin_name:"掷骰子",plugin_service_name:"dice",plugin_direction:"",plugin_commands:[{command:".r",description:"掷骰子(默认1d100)"},{command:".r 3d12",description:"掷3次12面骰子"}],plugin_notice:""},{plugin_name:"我问你答",plugin_service_name:"eqa",plugin_direction:"",plugin_commands:[{command:"我问A你答B",description:"设置自定义答复(仅对设置人有效)[支持图片回复]"},{command:"(管理员)大家问/有人问A你答B",description:"设置自定义答复(对所有人有效)[支持图片]"},{command:"不要回答+问题",description:"删除自定义答复(非管理员只能删除自己的问题)"},{command:"全部问答",description:"查看本群所有自定义答复"}],plugin_notice:""},{plugin_name:"reply(自定义回复)",plugin_service_name:"shebot",plugin_direction:"",plugin_commands:[{command:"fullmatch<触发词>#<回复>",description:"完全匹配[网页端支持图片回复]"},{command:"keyword<触发词>#<回复>",description:"关键词匹配[网页端支持图片回复]"},{command:"rex<触发词>#<回复>",description:"正则匹配[网页端支持图片回复]"},{command:"删除fullmatch|keyword|rex<触发词>",description:"删除对应关键词"}],plugin_notice:""},{plugin_name:"表情生成器",plugin_service_name:"",plugin_direction:"表情生成器",plugin_commands:[{command:"表情列表",description:"查看目前有哪些表情"},{command:"刷新表情",description:"更新表情库"},{command:"生成表情 <表情名字> <文案>",description:"生成一张表情包"},{command:"查看表情 <表情名字>",description:"查看一张表情"},{command:"<表情文字>.jpg",description:"查看一张表情"},{command:"上传表情 <表情名字> <表情图片>",description:"上传一张表情"},{command:"删除表情 <表情名字>",description:"删除一张表情"},{command:"表情管理@bot",description:'<a href="http://zfjdhj.cn:9023/meme">网页操作(仅限我)</a>'}],plugin_notice:""},{plugin_name:"简单识图",plugin_service_name:"picfinder",plugin_direction:"",plugin_commands:[{command:"识图+图片",description:"大概率找不到，猫猫真笨"}],plugin_notice:""},{plugin_name:"点歌",plugin_service_name:"music",plugin_direction:"",plugin_commands:[{command:"点歌+歌名",description:"在网易云，qq音乐上搜索歌曲"},{command:"选择<数字>",description:"在返回结果中选择"}],plugin_notice:""},{plugin_name:"抽签",plugin_service_name:"",plugin_direction:"portune",plugin_commands:[{command:"抽签|人品|运势|抽凯露签",description:"随机角色/指定凯露预测今日运势"}],plugin_notice:""},{plugin_name:"猜角色",plugin_service_name:"descgass",plugin_direction:"",plugin_commands:[{command:"猜角色",description:"开始小游戏"},{command:"猜角色排行榜",description:"本群排行榜"}],plugin_notice:""},{plugin_name:"猜头像",plugin_service_name:"avatargass",plugin_direction:"",plugin_commands:[{command:"猜头像",description:"开始小游戏"},{command:"猜头像排行榜",description:"本群排行榜"}],plugin_notice:""},{plugin_name:"猜语音",plugin_service_name:"voiceguess",plugin_direction:"",plugin_commands:[{command:"cygames",description:"开始小游戏"},{command:"猜语音排行",description:"本群排行榜"}],plugin_notice:""},{plugin_name:"猜明日方舟干员",plugin_service_name:"arkavatarguess",plugin_direction:"",plugin_commands:[{command:"猜干员",description:"开始小游戏"},{command:"猜干员排行榜",description:"本群排行榜"}],plugin_notice:""},{plugin_name:"猜语音-方舟版",plugin_service_name:"voiceguess",plugin_direction:"",plugin_commands:[{command:"arknights",description:"开始小游戏"},{command:"猜方舟排行榜",description:"本群排行榜"}],plugin_notice:""},{plugin_name:"猜群友",plugin_service_name:"memberguess",plugin_direction:"",plugin_commands:[{command:"猜群友",description:"开始小游戏"}],plugin_notice:""},{plugin_name:"俄罗斯轮盘",plugin_service_name:"",plugin_direction:"",plugin_commands:[{command:"俄罗斯轮盘|开枪|rs",description:"第一人命令装弹，其余人命令参与游戏"}],plugin_notice:""},{plugin_name:"网络语翻译",plugin_service_name:"nbnhhsh",plugin_direction:"",plugin_commands:[{command:"??<首字母缩写词>",description:"释义"}],plugin_notice:""},{plugin_name:"随机pcr语音",plugin_service_name:"pcr-record",plugin_direction:"",plugin_commands:[{command:"<角色>语音|语音<角色>",description:"随机一句角色语音"}],plugin_notice:""},{plugin_name:"戳机器人集卡小游戏",plugin_service_name:"poke-man-pcr",plugin_direction:"",plugin_commands:[{command:"<戳机器人>",description:"随机获得一张卡片"},{command:"查看仓库",description:"查看自己的仓库、卡片收集情况和排名"},{command:"查看仓库 [@某人]",description:"查看指定群友的仓库、卡片收集情况和排名"},{command:"献祭 [卡片1昵称] [卡片2昵称]",description:'献祭两张卡片以获得一张新的卡片。如是稀有卡片请在卡片昵称前加上"稀有"二字，如"稀有黑猫"'},{command:"交换 [卡片1昵称] [@某人] [卡片2昵称]",description:'向某人发起卡片交换请求，用自己的卡片1交换他的卡片2。同样，如是稀有卡片请在卡片昵称前加上"稀有"二字。'},{command:"确认交换",description:"收到换卡请求后一定时间内输入这个指令可完成换卡"}],plugin_notice:""},{plugin_name:"pcr海豹杀手",plugin_service_name:"pcr-seal-killer",plugin_direction:"",plugin_commands:[{command:"<游戏出New截图>",description:"海豹 爬"},{command:"启用海豹杀手 [海豹判定阈值]",description:"在当前群启用海豹杀手插件。如果不输入参数，默认阈值是100抽，小于100抽出货的均判定为海豹。"},{command:"禁用海豹杀手",description:"在当前群禁用海豹杀手插件。"}],plugin_notice:""},{plugin_name:"rss订阅",plugin_service_name:"rss",plugin_direction:"",plugin_commands:[{command:"rss help",description:"查看帮助"},{command:"rss add <rss地址>",description:"添加rss订阅,需使用完整rss订阅网址."},{command:"rss add-bilibili <up主id>|rss addb <up主id>",description:"添加b站up主订阅"},{command:"rss add-route route|rss addr route",description:"添加rsshub route订阅, route请查询rsshub文档"},{command:"rss list",description:"查看订阅列表"},{command:"rss remove <序号>|rss rm <序号>",description:"删除订阅列表指定项"},{command:"rss mode <模式id>",description:"设置推送消息模式 0=标准模式(默认),推送消息包含详情及图片 1=简略模式,推送消息仅包含标题"}],plugin_notice:""},{plugin_name:"NgGame",plugin_service_name:"zfjbot-NgGame",plugin_direction:"出自漫画《辉夜大小姐想让我告白～天才们的恋爱头脑战～》，规则为参与游戏的每个玩家为下一个玩家设置一个“NG词”， 设置完成后展示之，使得除了自己的每个人都能知道自己的NG词。之后所有玩家进行自由谈话，说出自己的NG词的玩家判负，退场。直至只剩一人为止。",plugin_commands:[{command:"NG词语游戏|NGWordGame|ng",description:"开始ng游戏"},{command:"sign in",description:"参与游戏"},{command:"stop signing",description:"停止注册"},{command:"(私聊)setNG<词语>",description:"设置NG词"},{command:"check",description:"加载所有设置的NG词并开始游戏"},{command:"stop",description:"强制终止游戏"}],plugin_notice:""}]},{plugins_type_id:"4",plugins_type_name:"实验性功能",plugins_list:[{plugin_name:"字符画",plugin_service_name:"",plugin_direction:"生成字符画",plugin_commands:[{command:"字符画<图片>",description:"生成字符画"}],plugin_notice:""}]},{plugins_type_id:"5",plugins_type_name:"关于setu",plugins_list:[{plugin_name:"setu",plugin_service_name:"涩图",plugin_direction:"好康的图片",plugin_commands:[{command:"[1-10][色瑟涩]图",description:"涩图"},{command:"[色瑟涩]图<关键词>",description:"搜索涩图(当前默认返回10张)"},{command:"不够[色瑟涩]",description:"r18涩图"},{command:"本群/群<群号>涩图[不]撤回",description:"[不]撤回（60s）"},{command:"本群/群<群号>r18开启/关闭",description:"r18开启/关闭"}],plugin_notice:'注:采用lolicon.api<br>\n    具体图库质量参见官方文档<a href="https://api.lolicon.app/#/setu">Lolicon API</a>\n    <br>目前图量<br>\n    Total:12748,R18:2318,Illustrator:1954\n    </p>\n    <p>\n    <sup class="footnote">9</sup>注:搜索没有回复，那就是被tx吞消息了，过段时间再试试吧。'}]}]);function i(n,e,c,o,t){var m=t;if(n){if("object"===Object(r["a"])(n)){for(var d in n)"plugin_name"===d&&(c=n[d]),"command"===d&&(o=n[d]),n[d]&&i(n[d],e,c,o,m);return m}if("string"===typeof n){if(o&&o!==n){if(n.indexOf(e)>-1){var a={plugin_name:c,command:o,description:n};return m.push(a),m}return m}return m}return m}}function e(e){if(e)return m.value=!1,d.data=i(n,e,"","",[]),d;m.value=!0}function o(){m.value=!0,a.value=""}function t(){window.location="/yobot/help"}var m=Object(c["x"])(!0),d=Object(c["w"])({data:""}),a=Object(c["x"])("");return{plugins_data:n,onSearch:e,onCancel:o,noticeBarClick:t,search:i,isRes:m,res_list:d,value:a}},data:function(){return{activeName:"1",message:"Copy These Text",show:!0}},methods:{dataProcessing:function(n){this.message=this.message+" "+n},doCopy:function(n){var i=document.createElement("input");i.value=n,document.body.appendChild(i),i.select(),document.execCommand("Copy",!0)&&Object(p["a"])("复制成功"),document.body.removeChild(i)}},components:{}};e("b011");s.render=a;var u=s,l=e("1f94"),_=e.n(l),g=e("f9bd"),b=e("1437"),f=e("b650"),v=e("d961"),j=e("7744"),O=e("34e9"),h=e("6b41"),y=e("a37c"),k=e("3104"),C=e("9ed2");e("157a");Object(c["e"])(u).use(g["b"]).use(b["a"]).use(f["a"]).use(v["a"]).use(j["b"]).use(O["a"]).use(h["a"]).use(y["a"]).use(k["a"]).use(C["a"]).use(_.a).mount("#app")},b011:function(n,i,e){"use strict";e("1975")}});
//# sourceMappingURL=app.278360bb.js.map