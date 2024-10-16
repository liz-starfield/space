const E=JSON.parse('{"key":"v-a0eafd0a","path":"/posts/cs/%E7%BD%91%E7%BB%9C.html","title":"网络","lang":"en-US","frontmatter":{"icon":"lightbulb","description":"网络 网络 快速掌握面试 1. 网络分层：OSI参考模型、TCP/IP参考模型、五层参考模型 2. TCP与UDP区别 3. TCP三次握手和四次挥手 4. 浏览器输入url到页面显示的过程（打开网页的整个过程会使用哪些协议） 5. 状态码 6. HTTP长连接&amp;短连接 7. HTTP/1.0, 1.1, 2.0, 3.0的区别 8. HTTP&amp;HTTPS 9. HTTP与RPC的区别 10. Cookie&amp;Session 11. URI和URL的区别是什么? 12. GET&amp;POST 13. IP&amp;MAC 一、网络体系结构 基本概念 计算机网络体系结构——分层结构 性能指标 速率、带宽、吞吐量 时延、时延带宽积、往返时间RTT、利用率 二、传输介质（第0层） 导向性传输介质 双绞线 同轴电缆 光纤 非导向性传输介质 三、物理层（第一层） 物理层设备 中继器 集线器 数据通信基础知识 数据通信模型 数据通信相关术语 数据通信方式分类 单工、半双工、全双工通信 串行、并行通信 同步、异步通信 数据交换方式 电路交换（建立物理连接交换方式） 报文交换（存储转发交换方式） 分组交换（存储转发交换方式） 数据报方式（存储转发交换方式） 虚电路方式（建立逻辑连接交换方式） 码元、速率、波特、带宽 奈氏准则&amp;香农定理 编码&amp;调制 编码（转为数字信号） 数字数据编码为数字信号 模拟数据编码为数字信号 调制（转为模拟信号） 数字数据调制为模拟信号 模拟数据调制为模拟信号 四、数据链路层（第二层） 链路层设备 网桥 交换机 链路层的功能 封装成帧&amp;透明传输 差错控制（检错编码） 流量控制和可靠传输机制 链路层的两种信道&amp;介质访问控制 局域网 局域网基本概念和体系结构 局域网的分类 以太网802.3 无线局域网802.11 广域网 广域网使用的链路层协议 PPP协议 HDLC协议 五、网络层（第三层） 网络层设备——路由器 网络层的功能 路由选择与分组转发 异构网络互联 拥塞控制 IPv4地址 IP数据报格式 IP数据报分片 网络地址转换（NAT） 子网划分&amp;子网掩码 构成超网（无分类编址方法CIDR） IPv6 移动IP IP组播 协议 ARP协议 DHCP协议 ICMP协议 三种路由协议&amp;路由算法 OSPF协议及链路状态算法 RIP协议及距离向量算法 BGP协议 IGMP协议与组播路由选择协议 六、传输层（第四层） TCP协议 UDP协议 七、应用层（第五层） 网络应用模型 C/S P2P 万维网和HTTP协议 域名解析系统DNS 文件传输协议FTP 电子邮件","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://liz-starfield.github.io/blog/zh/posts/cs/%E7%BD%91%E7%BB%9C.html"}],["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/posts/cs/%E7%BD%91%E7%BB%9C.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"网络"}],["meta",{"property":"og:description","content":"网络 网络 快速掌握面试 1. 网络分层：OSI参考模型、TCP/IP参考模型、五层参考模型 2. TCP与UDP区别 3. TCP三次握手和四次挥手 4. 浏览器输入url到页面显示的过程（打开网页的整个过程会使用哪些协议） 5. 状态码 6. HTTP长连接&amp;短连接 7. HTTP/1.0, 1.1, 2.0, 3.0的区别 8. HTTP&amp;HTTPS 9. HTTP与RPC的区别 10. Cookie&amp;Session 11. URI和URL的区别是什么? 12. GET&amp;POST 13. IP&amp;MAC 一、网络体系结构 基本概念 计算机网络体系结构——分层结构 性能指标 速率、带宽、吞吐量 时延、时延带宽积、往返时间RTT、利用率 二、传输介质（第0层） 导向性传输介质 双绞线 同轴电缆 光纤 非导向性传输介质 三、物理层（第一层） 物理层设备 中继器 集线器 数据通信基础知识 数据通信模型 数据通信相关术语 数据通信方式分类 单工、半双工、全双工通信 串行、并行通信 同步、异步通信 数据交换方式 电路交换（建立物理连接交换方式） 报文交换（存储转发交换方式） 分组交换（存储转发交换方式） 数据报方式（存储转发交换方式） 虚电路方式（建立逻辑连接交换方式） 码元、速率、波特、带宽 奈氏准则&amp;香农定理 编码&amp;调制 编码（转为数字信号） 数字数据编码为数字信号 模拟数据编码为数字信号 调制（转为模拟信号） 数字数据调制为模拟信号 模拟数据调制为模拟信号 四、数据链路层（第二层） 链路层设备 网桥 交换机 链路层的功能 封装成帧&amp;透明传输 差错控制（检错编码） 流量控制和可靠传输机制 链路层的两种信道&amp;介质访问控制 局域网 局域网基本概念和体系结构 局域网的分类 以太网802.3 无线局域网802.11 广域网 广域网使用的链路层协议 PPP协议 HDLC协议 五、网络层（第三层） 网络层设备——路由器 网络层的功能 路由选择与分组转发 异构网络互联 拥塞控制 IPv4地址 IP数据报格式 IP数据报分片 网络地址转换（NAT） 子网划分&amp;子网掩码 构成超网（无分类编址方法CIDR） IPv6 移动IP IP组播 协议 ARP协议 DHCP协议 ICMP协议 三种路由协议&amp;路由算法 OSPF协议及链路状态算法 RIP协议及距离向量算法 BGP协议 IGMP协议与组播路由选择协议 六、传输层（第四层） TCP协议 UDP协议 七、应用层（第五层） 网络应用模型 C/S P2P 万维网和HTTP协议 域名解析系统DNS 文件传输协议FTP 电子邮件"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T06:02:20.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:modified_time","content":"2024-10-16T06:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"网络\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-16T06:02:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"1. 网络分层：OSI参考模型、TCP/IP参考模型、五层参考模型","slug":"_1-网络分层-osi参考模型、tcp-ip参考模型、五层参考模型","link":"#_1-网络分层-osi参考模型、tcp-ip参考模型、五层参考模型","children":[]},{"level":2,"title":"2. TCP与UDP区别","slug":"_2-tcp与udp区别","link":"#_2-tcp与udp区别","children":[]},{"level":2,"title":"3. TCP三次握手和四次挥手","slug":"_3-tcp三次握手和四次挥手","link":"#_3-tcp三次握手和四次挥手","children":[]},{"level":2,"title":"4. 浏览器输入url到页面显示的过程（打开网页的整个过程会使用哪些协议）","slug":"_4-浏览器输入url到页面显示的过程-打开网页的整个过程会使用哪些协议","link":"#_4-浏览器输入url到页面显示的过程-打开网页的整个过程会使用哪些协议","children":[]},{"level":2,"title":"5. 状态码","slug":"_5-状态码","link":"#_5-状态码","children":[]},{"level":2,"title":"6. HTTP长连接&短连接","slug":"_6-http长连接-短连接","link":"#_6-http长连接-短连接","children":[]},{"level":2,"title":"7. HTTP/1.0, 1.1, 2.0, 3.0的区别","slug":"_7-http-1-0-1-1-2-0-3-0的区别","link":"#_7-http-1-0-1-1-2-0-3-0的区别","children":[]},{"level":2,"title":"8. HTTP&HTTPS","slug":"_8-http-https","link":"#_8-http-https","children":[]},{"level":2,"title":"9. HTTP与RPC的区别","slug":"_9-http与rpc的区别","link":"#_9-http与rpc的区别","children":[]},{"level":2,"title":"10. Cookie&Session","slug":"_10-cookie-session","link":"#_10-cookie-session","children":[]},{"level":2,"title":"11.  URI和URL的区别是什么?","slug":"_11-uri和url的区别是什么","link":"#_11-uri和url的区别是什么","children":[]},{"level":2,"title":"12.  GET&POST","slug":"_12-get-post","link":"#_12-get-post","children":[]},{"level":2,"title":"13.  IP&MAC","slug":"_13-ip-mac","link":"#_13-ip-mac","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"计算机网络体系结构——分层结构","slug":"计算机网络体系结构——分层结构","link":"#计算机网络体系结构——分层结构","children":[]},{"level":2,"title":"性能指标","slug":"性能指标","link":"#性能指标","children":[{"level":3,"title":"速率、带宽、吞吐量","slug":"速率、带宽、吞吐量","link":"#速率、带宽、吞吐量","children":[]},{"level":3,"title":"时延、时延带宽积、往返时间RTT、利用率","slug":"时延、时延带宽积、往返时间rtt、利用率","link":"#时延、时延带宽积、往返时间rtt、利用率","children":[]}]},{"level":2,"title":"导向性传输介质","slug":"导向性传输介质","link":"#导向性传输介质","children":[{"level":3,"title":"双绞线","slug":"双绞线","link":"#双绞线","children":[]},{"level":3,"title":"同轴电缆","slug":"同轴电缆","link":"#同轴电缆","children":[]},{"level":3,"title":"光纤","slug":"光纤","link":"#光纤","children":[]}]},{"level":2,"title":"非导向性传输介质","slug":"非导向性传输介质","link":"#非导向性传输介质","children":[]},{"level":2,"title":"物理层设备","slug":"物理层设备","link":"#物理层设备","children":[{"level":3,"title":"中继器","slug":"中继器","link":"#中继器","children":[]},{"level":3,"title":"集线器","slug":"集线器","link":"#集线器","children":[]}]},{"level":2,"title":"数据通信基础知识","slug":"数据通信基础知识","link":"#数据通信基础知识","children":[{"level":3,"title":"数据通信模型","slug":"数据通信模型","link":"#数据通信模型","children":[]},{"level":3,"title":"数据通信相关术语","slug":"数据通信相关术语","link":"#数据通信相关术语","children":[]},{"level":3,"title":"数据通信方式分类","slug":"数据通信方式分类","link":"#数据通信方式分类","children":[]},{"level":3,"title":"数据交换方式","slug":"数据交换方式","link":"#数据交换方式","children":[]},{"level":3,"title":"码元、速率、波特、带宽","slug":"码元、速率、波特、带宽","link":"#码元、速率、波特、带宽","children":[]},{"level":3,"title":"奈氏准则&香农定理","slug":"奈氏准则-香农定理","link":"#奈氏准则-香农定理","children":[]},{"level":3,"title":"编码&调制","slug":"编码-调制","link":"#编码-调制","children":[]}]},{"level":2,"title":"链路层设备","slug":"链路层设备","link":"#链路层设备","children":[{"level":3,"title":"网桥","slug":"网桥","link":"#网桥","children":[]},{"level":3,"title":"交换机","slug":"交换机","link":"#交换机","children":[]}]},{"level":2,"title":"链路层的功能","slug":"链路层的功能","link":"#链路层的功能","children":[{"level":3,"title":"封装成帧&透明传输","slug":"封装成帧-透明传输","link":"#封装成帧-透明传输","children":[]},{"level":3,"title":"差错控制（检错编码）","slug":"差错控制-检错编码","link":"#差错控制-检错编码","children":[]},{"level":3,"title":"流量控制和可靠传输机制","slug":"流量控制和可靠传输机制","link":"#流量控制和可靠传输机制","children":[]}]},{"level":2,"title":"链路层的两种信道&介质访问控制","slug":"链路层的两种信道-介质访问控制","link":"#链路层的两种信道-介质访问控制","children":[]},{"level":2,"title":"局域网","slug":"局域网","link":"#局域网","children":[{"level":3,"title":"局域网基本概念和体系结构","slug":"局域网基本概念和体系结构","link":"#局域网基本概念和体系结构","children":[]},{"level":3,"title":"局域网的分类","slug":"局域网的分类","link":"#局域网的分类","children":[]}]},{"level":2,"title":"广域网","slug":"广域网","link":"#广域网","children":[{"level":3,"title":"广域网使用的链路层协议","slug":"广域网使用的链路层协议","link":"#广域网使用的链路层协议","children":[]}]},{"level":2,"title":"网络层设备——路由器","slug":"网络层设备——路由器","link":"#网络层设备——路由器","children":[]},{"level":2,"title":"网络层的功能","slug":"网络层的功能","link":"#网络层的功能","children":[{"level":3,"title":"路由选择与分组转发","slug":"路由选择与分组转发","link":"#路由选择与分组转发","children":[]},{"level":3,"title":"异构网络互联","slug":"异构网络互联","link":"#异构网络互联","children":[]},{"level":3,"title":"拥塞控制","slug":"拥塞控制","link":"#拥塞控制","children":[]}]},{"level":2,"title":"IPv4地址","slug":"ipv4地址","link":"#ipv4地址","children":[]},{"level":2,"title":"IP数据报格式","slug":"ip数据报格式","link":"#ip数据报格式","children":[]},{"level":2,"title":"IP数据报分片","slug":"ip数据报分片","link":"#ip数据报分片","children":[]},{"level":2,"title":"网络地址转换（NAT）","slug":"网络地址转换-nat","link":"#网络地址转换-nat","children":[]},{"level":2,"title":"子网划分&子网掩码","slug":"子网划分-子网掩码","link":"#子网划分-子网掩码","children":[]},{"level":2,"title":"构成超网（无分类编址方法CIDR）","slug":"构成超网-无分类编址方法cidr","link":"#构成超网-无分类编址方法cidr","children":[]},{"level":2,"title":"IPv6","slug":"ipv6","link":"#ipv6","children":[]},{"level":2,"title":"移动IP","slug":"移动ip","link":"#移动ip","children":[]},{"level":2,"title":"IP组播","slug":"ip组播","link":"#ip组播","children":[]},{"level":2,"title":"协议","slug":"协议","link":"#协议","children":[{"level":3,"title":"ARP协议","slug":"arp协议","link":"#arp协议","children":[]},{"level":3,"title":"DHCP协议","slug":"dhcp协议","link":"#dhcp协议","children":[]},{"level":3,"title":"ICMP协议","slug":"icmp协议","link":"#icmp协议","children":[]},{"level":3,"title":"三种路由协议&路由算法","slug":"三种路由协议-路由算法","link":"#三种路由协议-路由算法","children":[]},{"level":3,"title":"IGMP协议与组播路由选择协议","slug":"igmp协议与组播路由选择协议","link":"#igmp协议与组播路由选择协议","children":[]}]},{"level":2,"title":"TCP协议","slug":"tcp协议","link":"#tcp协议","children":[]},{"level":2,"title":"UDP协议","slug":"udp协议","link":"#udp协议","children":[]},{"level":2,"title":"网络应用模型","slug":"网络应用模型","link":"#网络应用模型","children":[{"level":3,"title":"C/S","slug":"c-s","link":"#c-s","children":[]},{"level":3,"title":"P2P","slug":"p2p","link":"#p2p","children":[]}]},{"level":2,"title":"万维网和HTTP协议","slug":"万维网和http协议","link":"#万维网和http协议","children":[]},{"level":2,"title":"域名解析系统DNS","slug":"域名解析系统dns","link":"#域名解析系统dns","children":[]},{"level":2,"title":"文件传输协议FTP","slug":"文件传输协议ftp","link":"#文件传输协议ftp","children":[]},{"level":2,"title":"电子邮件","slug":"电子邮件","link":"#电子邮件","children":[]}],"git":{"createdTime":1729058540000,"updatedTime":1729058540000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":23.37,"words":7010},"filePathRelative":"posts/cs/网络.md","localizedDate":"October 16, 2024","excerpt":"<h1> 网络</h1>\\n<ul>\\n<li><a href=\\"#%E7%BD%91%E7%BB%9C\\">网络</a></li>\\n<li><a href=\\"#%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%E9%9D%A2%E8%AF%95\\">快速掌握面试</a>\\n<ul>\\n<li><a href=\\"#1-%E7%BD%91%E7%BB%9C%E5%88%86%E5%B1%82osi%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8Btcpip%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B%E4%BA%94%E5%B1%82%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B-\\">1. 网络分层：OSI参考模型、TCP/IP参考模型、五层参考模型 </a></li>\\n<li><a href=\\"#2-tcp%E4%B8%8Eudp%E5%8C%BA%E5%88%AB-\\">2. TCP与UDP区别 </a></li>\\n<li><a href=\\"#3-tcp%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B-\\">3. TCP三次握手和四次挥手 </a></li>\\n<li><a href=\\"#4-%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5url%E5%88%B0%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E7%9A%84%E8%BF%87%E7%A8%8B%E6%89%93%E5%BC%80%E7%BD%91%E9%A1%B5%E7%9A%84%E6%95%B4%E4%B8%AA%E8%BF%87%E7%A8%8B%E4%BC%9A%E4%BD%BF%E7%94%A8%E5%93%AA%E4%BA%9B%E5%8D%8F%E8%AE%AE-\\">4. 浏览器输入url到页面显示的过程（打开网页的整个过程会使用哪些协议） </a></li>\\n<li><a href=\\"#5-%E7%8A%B6%E6%80%81%E7%A0%81-\\">5. 状态码 </a></li>\\n<li><a href=\\"#6-http%E9%95%BF%E8%BF%9E%E6%8E%A5%E7%9F%AD%E8%BF%9E%E6%8E%A5-\\">6. HTTP长连接&amp;短连接 </a></li>\\n<li><a href=\\"#7-http10-11-20-30%E7%9A%84%E5%8C%BA%E5%88%AB-\\">7. HTTP/1.0, 1.1, 2.0, 3.0的区别 </a></li>\\n<li><a href=\\"#8-httphttps-\\">8. HTTP&amp;HTTPS </a></li>\\n<li><a href=\\"#9-http%E4%B8%8Erpc%E7%9A%84%E5%8C%BA%E5%88%AB-\\">9. HTTP与RPC的区别 </a></li>\\n<li><a href=\\"#10-cookiesession-\\">10. Cookie&amp;Session </a></li>\\n<li><a href=\\"#11--uri%E5%92%8Curl%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88--\\">11.  URI和URL的区别是什么?  </a></li>\\n<li><a href=\\"#12--getpost-\\">12.  GET&amp;POST </a></li>\\n<li><a href=\\"#13--ipmac-\\">13.  IP&amp;MAC </a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%B8%80%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84\\">一、网络体系结构</a>\\n<ul>\\n<li><a href=\\"#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5\\">基本概念</a></li>\\n<li><a href=\\"#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E5%88%86%E5%B1%82%E7%BB%93%E6%9E%84\\">计算机网络体系结构——分层结构</a></li>\\n<li><a href=\\"#%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87\\">性能指标</a>\\n<ul>\\n<li><a href=\\"#%E9%80%9F%E7%8E%87%E5%B8%A6%E5%AE%BD%E5%90%9E%E5%90%90%E9%87%8F\\">速率、带宽、吞吐量</a></li>\\n<li><a href=\\"#%E6%97%B6%E5%BB%B6%E6%97%B6%E5%BB%B6%E5%B8%A6%E5%AE%BD%E7%A7%AF%E5%BE%80%E8%BF%94%E6%97%B6%E9%97%B4rtt%E5%88%A9%E7%94%A8%E7%8E%87\\">时延、时延带宽积、往返时间RTT、利用率</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%BA%8C%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8%E7%AC%AC0%E5%B1%82\\">二、传输介质（第0层）</a>\\n<ul>\\n<li><a href=\\"#%E5%AF%BC%E5%90%91%E6%80%A7%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8\\">导向性传输介质</a>\\n<ul>\\n<li><a href=\\"#%E5%8F%8C%E7%BB%9E%E7%BA%BF\\">双绞线</a></li>\\n<li><a href=\\"#%E5%90%8C%E8%BD%B4%E7%94%B5%E7%BC%86\\">同轴电缆</a></li>\\n<li><a href=\\"#%E5%85%89%E7%BA%A4\\">光纤</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E9%9D%9E%E5%AF%BC%E5%90%91%E6%80%A7%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8\\">非导向性传输介质</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%B8%89%E7%89%A9%E7%90%86%E5%B1%82%E7%AC%AC%E4%B8%80%E5%B1%82\\">三、物理层（第一层）</a>\\n<ul>\\n<li><a href=\\"#%E7%89%A9%E7%90%86%E5%B1%82%E8%AE%BE%E5%A4%87\\">物理层设备</a>\\n<ul>\\n<li><a href=\\"#%E4%B8%AD%E7%BB%A7%E5%99%A8\\">中继器</a></li>\\n<li><a href=\\"#%E9%9B%86%E7%BA%BF%E5%99%A8\\">集线器</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86\\">数据通信基础知识</a>\\n<ul>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%A8%A1%E5%9E%8B\\">数据通信模型</a></li>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E7%9B%B8%E5%85%B3%E6%9C%AF%E8%AF%AD\\">数据通信相关术语</a></li>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F%E5%88%86%E7%B1%BB\\">数据通信方式分类</a>\\n<ul>\\n<li><a href=\\"#%E5%8D%95%E5%B7%A5%E5%8D%8A%E5%8F%8C%E5%B7%A5%E5%85%A8%E5%8F%8C%E5%B7%A5%E9%80%9A%E4%BF%A1\\">单工、半双工、全双工通信</a></li>\\n<li><a href=\\"#%E4%B8%B2%E8%A1%8C%E5%B9%B6%E8%A1%8C%E9%80%9A%E4%BF%A1\\">串行、并行通信</a></li>\\n<li><a href=\\"#%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5%E9%80%9A%E4%BF%A1\\">同步、异步通信</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F\\">数据交换方式</a>\\n<ul>\\n<li><a href=\\"#%E7%94%B5%E8%B7%AF%E4%BA%A4%E6%8D%A2%E5%BB%BA%E7%AB%8B%E7%89%A9%E7%90%86%E8%BF%9E%E6%8E%A5%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F\\">电路交换（建立物理连接交换方式）</a></li>\\n<li><a href=\\"#%E6%8A%A5%E6%96%87%E4%BA%A4%E6%8D%A2%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F\\">报文交换（存储转发交换方式）</a></li>\\n<li><a href=\\"#%E5%88%86%E7%BB%84%E4%BA%A4%E6%8D%A2%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F\\">分组交换（存储转发交换方式）</a>\\n<ul>\\n<li><a href=\\"#%E6%95%B0%E6%8D%AE%E6%8A%A5%E6%96%B9%E5%BC%8F%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F\\">数据报方式（存储转发交换方式）</a></li>\\n<li><a href=\\"#%E8%99%9A%E7%94%B5%E8%B7%AF%E6%96%B9%E5%BC%8F%E5%BB%BA%E7%AB%8B%E9%80%BB%E8%BE%91%E8%BF%9E%E6%8E%A5%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F\\">虚电路方式（建立逻辑连接交换方式）</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E7%A0%81%E5%85%83%E9%80%9F%E7%8E%87%E6%B3%A2%E7%89%B9%E5%B8%A6%E5%AE%BD\\">码元、速率、波特、带宽</a></li>\\n<li><a href=\\"#%E5%A5%88%E6%B0%8F%E5%87%86%E5%88%99%E9%A6%99%E5%86%9C%E5%AE%9A%E7%90%86\\">奈氏准则&amp;香农定理</a></li>\\n<li><a href=\\"#%E7%BC%96%E7%A0%81%E8%B0%83%E5%88%B6\\">编码&amp;调制</a>\\n<ul>\\n<li><a href=\\"#%E7%BC%96%E7%A0%81%E8%BD%AC%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7\\">编码（转为数字信号）</a>\\n<ul>\\n<li><a href=\\"#%E6%95%B0%E5%AD%97%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7\\">数字数据编码为数字信号</a></li>\\n<li><a href=\\"#%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7\\">模拟数据编码为数字信号</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E8%B0%83%E5%88%B6%E8%BD%AC%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7\\">调制（转为模拟信号）</a>\\n<ul>\\n<li><a href=\\"#%E6%95%B0%E5%AD%97%E6%95%B0%E6%8D%AE%E8%B0%83%E5%88%B6%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7\\">数字数据调制为模拟信号</a></li>\\n<li><a href=\\"#%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE%E8%B0%83%E5%88%B6%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7\\">模拟数据调制为模拟信号</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%9B%9B%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82%E7%AC%AC%E4%BA%8C%E5%B1%82\\">四、数据链路层（第二层）</a>\\n<ul>\\n<li><a href=\\"#%E9%93%BE%E8%B7%AF%E5%B1%82%E8%AE%BE%E5%A4%87\\">链路层设备</a>\\n<ul>\\n<li><a href=\\"#%E7%BD%91%E6%A1%A5\\">网桥</a></li>\\n<li><a href=\\"#%E4%BA%A4%E6%8D%A2%E6%9C%BA\\">交换机</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E9%93%BE%E8%B7%AF%E5%B1%82%E7%9A%84%E5%8A%9F%E8%83%BD\\">链路层的功能</a>\\n<ul>\\n<li><a href=\\"#%E5%B0%81%E8%A3%85%E6%88%90%E5%B8%A7%E9%80%8F%E6%98%8E%E4%BC%A0%E8%BE%93\\">封装成帧&amp;透明传输</a></li>\\n<li><a href=\\"#%E5%B7%AE%E9%94%99%E6%8E%A7%E5%88%B6%E6%A3%80%E9%94%99%E7%BC%96%E7%A0%81\\">差错控制（检错编码）</a></li>\\n<li><a href=\\"#%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E5%92%8C%E5%8F%AF%E9%9D%A0%E4%BC%A0%E8%BE%93%E6%9C%BA%E5%88%B6\\">流量控制和可靠传输机制</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E9%93%BE%E8%B7%AF%E5%B1%82%E7%9A%84%E4%B8%A4%E7%A7%8D%E4%BF%A1%E9%81%93%E4%BB%8B%E8%B4%A8%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6\\">链路层的两种信道&amp;介质访问控制</a></li>\\n<li><a href=\\"#%E5%B1%80%E5%9F%9F%E7%BD%91\\">局域网</a>\\n<ul>\\n<li><a href=\\"#%E5%B1%80%E5%9F%9F%E7%BD%91%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E5%92%8C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84\\">局域网基本概念和体系结构</a></li>\\n<li><a href=\\"#%E5%B1%80%E5%9F%9F%E7%BD%91%E7%9A%84%E5%88%86%E7%B1%BB\\">局域网的分类</a>\\n<ul>\\n<li><a href=\\"#%E4%BB%A5%E5%A4%AA%E7%BD%918023\\">以太网802.3</a></li>\\n<li><a href=\\"#%E6%97%A0%E7%BA%BF%E5%B1%80%E5%9F%9F%E7%BD%9180211\\">无线局域网802.11</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%B9%BF%E5%9F%9F%E7%BD%91\\">广域网</a>\\n<ul>\\n<li><a href=\\"#%E5%B9%BF%E5%9F%9F%E7%BD%91%E4%BD%BF%E7%94%A8%E7%9A%84%E9%93%BE%E8%B7%AF%E5%B1%82%E5%8D%8F%E8%AE%AE\\">广域网使用的链路层协议</a>\\n<ul>\\n<li><a href=\\"#ppp%E5%8D%8F%E8%AE%AE\\">PPP协议</a></li>\\n<li><a href=\\"#hdlc%E5%8D%8F%E8%AE%AE\\">HDLC协议</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%BA%94%E7%BD%91%E7%BB%9C%E5%B1%82%E7%AC%AC%E4%B8%89%E5%B1%82\\">五、网络层（第三层）</a>\\n<ul>\\n<li><a href=\\"#%E7%BD%91%E7%BB%9C%E5%B1%82%E8%AE%BE%E5%A4%87%E8%B7%AF%E7%94%B1%E5%99%A8\\">网络层设备——路由器</a></li>\\n<li><a href=\\"#%E7%BD%91%E7%BB%9C%E5%B1%82%E7%9A%84%E5%8A%9F%E8%83%BD\\">网络层的功能</a>\\n<ul>\\n<li><a href=\\"#%E8%B7%AF%E7%94%B1%E9%80%89%E6%8B%A9%E4%B8%8E%E5%88%86%E7%BB%84%E8%BD%AC%E5%8F%91\\">路由选择与分组转发</a></li>\\n<li><a href=\\"#%E5%BC%82%E6%9E%84%E7%BD%91%E7%BB%9C%E4%BA%92%E8%81%94\\">异构网络互联</a></li>\\n<li><a href=\\"#%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6\\">拥塞控制</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#ipv4%E5%9C%B0%E5%9D%80\\">IPv4地址</a></li>\\n<li><a href=\\"#ip%E6%95%B0%E6%8D%AE%E6%8A%A5%E6%A0%BC%E5%BC%8F\\">IP数据报格式</a></li>\\n<li><a href=\\"#ip%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%88%86%E7%89%87\\">IP数据报分片</a></li>\\n<li><a href=\\"#%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2nat\\">网络地址转换（NAT）</a></li>\\n<li><a href=\\"#%E5%AD%90%E7%BD%91%E5%88%92%E5%88%86%E5%AD%90%E7%BD%91%E6%8E%A9%E7%A0%81\\">子网划分&amp;子网掩码</a></li>\\n<li><a href=\\"#%E6%9E%84%E6%88%90%E8%B6%85%E7%BD%91%E6%97%A0%E5%88%86%E7%B1%BB%E7%BC%96%E5%9D%80%E6%96%B9%E6%B3%95cidr\\">构成超网（无分类编址方法CIDR）</a></li>\\n<li><a href=\\"#ipv6\\">IPv6</a></li>\\n<li><a href=\\"#%E7%A7%BB%E5%8A%A8ip\\">移动IP</a></li>\\n<li><a href=\\"#ip%E7%BB%84%E6%92%AD\\">IP组播</a></li>\\n<li><a href=\\"#%E5%8D%8F%E8%AE%AE\\">协议</a>\\n<ul>\\n<li><a href=\\"#arp%E5%8D%8F%E8%AE%AE\\">ARP协议</a></li>\\n<li><a href=\\"#dhcp%E5%8D%8F%E8%AE%AE\\">DHCP协议</a></li>\\n<li><a href=\\"#icmp%E5%8D%8F%E8%AE%AE\\">ICMP协议</a></li>\\n<li><a href=\\"#%E4%B8%89%E7%A7%8D%E8%B7%AF%E7%94%B1%E5%8D%8F%E8%AE%AE%E8%B7%AF%E7%94%B1%E7%AE%97%E6%B3%95\\">三种路由协议&amp;路由算法</a>\\n<ul>\\n<li><a href=\\"#ospf%E5%8D%8F%E8%AE%AE%E5%8F%8A%E9%93%BE%E8%B7%AF%E7%8A%B6%E6%80%81%E7%AE%97%E6%B3%95\\">OSPF协议及链路状态算法</a></li>\\n<li><a href=\\"#rip%E5%8D%8F%E8%AE%AE%E5%8F%8A%E8%B7%9D%E7%A6%BB%E5%90%91%E9%87%8F%E7%AE%97%E6%B3%95\\">RIP协议及距离向量算法</a></li>\\n<li><a href=\\"#bgp%E5%8D%8F%E8%AE%AE\\">BGP协议</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#igmp%E5%8D%8F%E8%AE%AE%E4%B8%8E%E7%BB%84%E6%92%AD%E8%B7%AF%E7%94%B1%E9%80%89%E6%8B%A9%E5%8D%8F%E8%AE%AE\\">IGMP协议与组播路由选择协议</a></li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E5%85%AD%E4%BC%A0%E8%BE%93%E5%B1%82%E7%AC%AC%E5%9B%9B%E5%B1%82\\">六、传输层（第四层）</a>\\n<ul>\\n<li><a href=\\"#tcp%E5%8D%8F%E8%AE%AE\\">TCP协议</a></li>\\n<li><a href=\\"#udp%E5%8D%8F%E8%AE%AE\\">UDP协议</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%B8%83%E5%BA%94%E7%94%A8%E5%B1%82%E7%AC%AC%E4%BA%94%E5%B1%82\\">七、应用层（第五层）</a>\\n<ul>\\n<li><a href=\\"#%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E6%A8%A1%E5%9E%8B\\">网络应用模型</a>\\n<ul>\\n<li><a href=\\"#cs\\">C/S</a></li>\\n<li><a href=\\"#p2p\\">P2P</a></li>\\n</ul>\\n</li>\\n<li><a href=\\"#%E4%B8%87%E7%BB%B4%E7%BD%91%E5%92%8Chttp%E5%8D%8F%E8%AE%AE\\">万维网和HTTP协议</a></li>\\n<li><a href=\\"#%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E7%B3%BB%E7%BB%9Fdns\\">域名解析系统DNS</a></li>\\n<li><a href=\\"#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AEftp\\">文件传输协议FTP</a></li>\\n<li><a href=\\"#%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6\\">电子邮件</a></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{E as data};
