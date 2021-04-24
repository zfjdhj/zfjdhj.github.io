(self.webpackChunkhtml=self.webpackChunkhtml||[]).push([[39],{7365:function(t,d,r){"use strict";r.r(d),r.d(d,{data:function(){return o}});const o={key:"v-b3a1927e",path:"/zfjbot/plugins_type_1.html",title:"会战相关",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"会战管理",slug:"会战管理",children:[]},{level:2,title:"自动报刀",slug:"自动报刀",children:[]},{level:2,title:"筛刀",slug:"筛刀",children:[]},{level:2,title:"合刀计算",slug:"合刀计算",children:[]},{level:2,title:"bot群管",slug:"bot群管",children:[]},{level:2,title:"bot管理",slug:"bot管理",children:[]},{level:2,title:"yobot数据库",slug:"yobot数据库",children:[]},{level:2,title:"YoCool控制台",slug:"yocool控制台",children:[]}],filePathRelative:"zfjbot/plugins_type_1.md",git:{updatedTime:1619165657e3,contributors:[{name:"Administrator",email:"320336328@qq.com",commits:1}]}}},378:function(t,d,r){"use strict";r.r(d),r.d(d,{default:function(){return e}});const o=(0,r(6252).uE)('<h1 id="会战相关"><a class="header-anchor" href="#会战相关">#</a> 会战相关</h1><h2 id="会战管理"><a class="header-anchor" href="#会战管理">#</a> 会战管理</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>手册</td><td>查看公会战使用手册</td></tr><tr><td>面板</td><td>进入公会战面板</td></tr><tr><td>登录</td><td>登录进入Web模式</td></tr><tr><td>重置密码</td><td>随机生成一个新密码（不发链接）</td></tr><tr><td>创建国服公会</td><td>日/韩/台/国，创建后可在后台修改</td></tr><tr><td>加入公会[@某人]</td><td>加入到公会名单，如果有at则为加入他人</td></tr><tr><td>(管理员)加入全部成员</td><td>所有群成员加入到公会名单</td></tr><tr><td>报刀2000000 [@某人] [昨日] [:留言]</td><td>对boss造成伤害但未击败时用，记录伤害，可以使用 200w/200万/2000k 等（一般公会精确到万即可）如果有at则为代报，有冒号则为留言如果有“昨日”则将记录添加到前一天</td></tr><tr><td>尾刀 [@某人] [昨日] [:留言]</td><td>对boss造成伤害并击败时用，记录伤害如果有at则为代报，有冒号则为留言如果有“昨日”则将记录添加到前一天</td></tr><tr><td>SL [@某人] [？]</td><td>挑战boss强制取消后用，记录本日SL，用“？”查询今日是否已 SL如果有at则为代报</td></tr><tr><td>撤销</td><td>撤销上一次报刀（非管理员只能撤销自己的记录）</td></tr><tr><td>状态</td><td>显示boss状态</td></tr><tr><td>进度</td><td>出刀进度</td></tr><tr><td>预约1 [:留言]</td><td>预约boss，当boss出现时通知，有冒号则为留言</td></tr><tr><td>挂树 [:留言]</td><td>挂树，当boss被击败时通知</td></tr><tr><td>查1 / 查树</td><td>查询预约boss的成员，查询挂树的成员</td></tr><tr><td>取消预约1 / 取消1</td><td>取消预约</td></tr><tr><td>申请出刀</td><td>锁定boss，提醒后面申请出刀的人有人正在挑战boss</td></tr><tr><td>锁定:留言</td><td>锁定boss，提醒后面申请出刀的人，冒号后为留言</td></tr><tr><td>解锁</td><td>解锁boss，其他人可以继续申请</td></tr><tr><td>version</td><td>查看yobot版本</td></tr></tbody></table><h2 id="自动报刀"><a class="header-anchor" href="#自动报刀">#</a> 自动报刀</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>cbi 帮助</td><td>获取帮助信息</td></tr><tr><td>cbi 总表</td><td>查询公会总表</td></tr><tr><td>cbi 日总表 [n]</td><td>查询公会日表, n表示会战第n天, 不带n参数默认为第1天</td></tr><tr><td>cbi 日出刀表 [n]</td><td>查询公会日表, n表示会战第n天, 不带n参数默认为第1天.</td></tr><tr><td>cbi boss出刀表 [n]</td><td>查询boss出刀表, n为boss编号, 取值为1-5.</td></tr><tr><td>cbi boss状态</td><td>查询boss状态</td></tr><tr><td>cbi 状态</td><td>查看插件当前状态</td></tr><tr><td>cbi 检查成员</td><td>检查公会成员是否全部有对应QQ号码</td></tr><tr><td>cbi 绑定 游戏昵称 [bot/@某人]</td><td>将指定游戏昵称绑定本qq号码或者指定qq号码, 适用于游戏昵称和群名片不匹配的情况, 加入bot表示将该昵称绑定为bot自己的qq号码. 如果游戏昵称有空格, 请将昵称放置在[]中</td></tr><tr><td>cbi 解除绑定 游戏昵称</td><td>解除绑定</td></tr><tr><td>cbi 查看绑定</td><td>查看当前的绑定列表</td></tr><tr><td>cbi 绑定未知成员 bot/@某人</td><td>将指定所有找不到对应qq的游戏昵称绑定给指定qq号码, 适用于部分成员不在群内的情况, bot表示将该昵称绑定为bot自己的qq号码,使用该功能必须参照下方常见问题解除yobot出刀限制</td></tr><tr><td>cbi 解除绑定未知成员</td><td>禁用上述功能</td></tr><tr><td>cbi 继续报刀</td><td>继续自动报刀, 当自动报刀因错误暂停时, 请在排除错误后使用该命令继续报刀</td></tr><tr><td>cbi 暂停报刀</td><td>暂停自动报刀</td></tr><tr><td>cbi 重置推送进度</td><td>重置推送进度, 下一次将从第一条出刀记录重新开始推送</td></tr><tr><td>cbi 重置报刀进度</td><td>重置报刀进度, 从第一条出刀记录重新同步报刀进度, 适用于清空yobot记录后需要重新开始报刀的情况</td></tr><tr><td>初始化</td><td>重新加载群数据, 修改config文件后可以使用本指令重新加载数据</td></tr></tbody></table><h2 id="筛刀"><a class="header-anchor" href="#筛刀">#</a> 筛刀</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>筛刀帮助</td><td>显示帮助信息</td></tr><tr><td>开始筛刀</td><td>清空以前的筛刀数据</td></tr><tr><td>(@bot)筛刀</td><td>更新筛刀 &lt;伤害值&gt; [@群友]</td></tr><tr><td>筛刀信息</td><td>显示现在的筛刀信息</td></tr><tr><td>筛刀结算</td><td>结算筛刀</td></tr><tr><td>结束筛刀</td><td>清空当前筛刀数据</td></tr></tbody></table><h2 id="合刀计算"><a class="header-anchor" href="#合刀计算">#</a> 合刀计算</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>(@bot)合刀 &lt;刀1伤害&gt; &lt;刀2伤害&gt; &lt;剩余血量&gt;</td><td>计算尾刀补偿时间</td></tr></tbody></table><h2 id="bot群管"><a class="header-anchor" href="#bot群管">#</a> bot群管</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>[辱骂bot]</td><td>口球8小时</td></tr><tr><td>[gbf链接]</td><td>识破骑空士的阴谋</td></tr><tr><td>[chat]</td><td>一些关键词回复</td></tr><tr><td>(自动)group_increase</td><td>group_decrease.leave</td></tr><tr><td>(自动)random-repeater</td><td>随机复读</td></tr><tr><td>精致睡眠</td><td>给我来一份精致昏睡下午茶套餐</td></tr></tbody></table><h2 id="bot管理"><a class="header-anchor" href="#bot管理">#</a> bot管理</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>(自动)被踢提醒alert</td><td>bot被qq踢出群qq_group</td></tr><tr><td>broadcast</td><td>bc</td></tr><tr><td>清理数据</td><td>清理Image文件夹，慎用</td></tr><tr><td>来杯咖啡&lt;内容&gt;</td><td>反馈内容 联系维护组</td></tr><tr><td>help</td><td>帮助</td></tr><tr><td>(私聊)ls -g</td><td>-f</td></tr><tr><td>lssv</td><td>服务列表</td></tr><tr><td>enable</td><td>启用</td></tr><tr><td>disable</td><td>禁用</td></tr></tbody></table><h2 id="yobot数据库"><a class="header-anchor" href="#yobot数据库">#</a> yobot数据库</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>yobotdb 增加数据 [昨日] &lt;伤害&gt; &lt;周目&gt; &lt;boss&gt; [尾刀</td><td>补偿刀] [@某人]</td></tr><tr><td>yobotdb 删除数据 [昨日] &lt;伤害&gt; [@某人]</td><td>删除(昨日)出刀数据</td></tr><tr><td>yobotdb 修改数据 [昨日] &lt;旧伤害&gt; &lt;新伤害&gt; [@某人]</td><td>修改(昨日)出刀数据</td></tr><tr><td>yobotdb 查看数据 [昨日]</td><td>查看(昨日)出刀数据</td></tr></tbody></table><h2 id="yocool控制台"><a class="header-anchor" href="#yocool控制台">#</a> YoCool控制台</h2><table><thead><tr><th>指令</th><th>功能</th></tr></thead><tbody><tr><td>一键安装</td><td>使用默认主题快速安装YoCool，也可使用一键安装 主题名来指定安装哪个主题</td></tr><tr><td>切换主题</td><td>切换YoCool的主题，使用切换主题 主题名来选择切换到哪个主题</td></tr><tr><td>更新YoCool</td><td>更新YoCool到最新版本，指令前带强制可以强制执行本条指令</td></tr><tr><td>卸载YoCool</td><td>将YoCool从yobot中卸载，指令前带强制可以强制执行本条指令</td></tr></tbody></table>',17);var e={render:function(t,d){return o}}}}]);