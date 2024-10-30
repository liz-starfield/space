import{_ as t}from"./007_claude_evaluation-AfjGPbzi.js";import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as n,o as u,c as s,f as c,a as e,b as l,d as o,e as a}from"./app-XE8HD-o1.js";const d={},h=a('<h1 id="claude-3-5-sonnet-computer-use" tabindex="-1"><a class="header-anchor" href="#claude-3-5-sonnet-computer-use" aria-hidden="true">#</a> Claude 3.5 Sonnet: Computer use</h1><ul><li><ol><li>About</li></ol></li><li><ol start="2"><li>业界benchmarks</li></ol></li><li><ol start="3"><li>API支持</li></ol></li><li><ol start="4"><li>Computer Use 的特点</li></ol></li><li><ol start="5"><li>未来发展方向</li></ol></li></ul>',2),p=e("h2",{id:"_1-about",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-about","aria-hidden":"true"},"#"),l(" 1. About")],-1),_=e("p",null,"公司：Anthropic",-1),m=e("p",null,"官方文章：",-1),f={href:"https://www.anthropic.com/news/3-5-models-and-computer-use",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.anthropic.com/news/developing-computer-use",target:"_blank",rel:"noopener noreferrer"},C=a('<p>官方演示视频：</p><p>https://www.youtube.com/playlist?list=PLf2m23nhTg1NcDu3_eZavbTJ3Dow9QQRB</p><p>代码实现：</p><p>https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo</p><h2 id="_2-业界benchmarks" tabindex="-1"><a class="header-anchor" href="#_2-业界benchmarks" aria-hidden="true">#</a> 2. 业界benchmarks</h2><ul><li>SWE-bench Verified（编程能力测评）</li><li>TAU-bench（工具使用能力测评）</li><li>OSWorld (操控计算机能力测评)</li></ul><p>Claude3.5性能测评结果：</p><p>在 OSWorld 中，Claude 3.5 Sonnet 在纯截图类别中获得了 14.9% 的评分。</p><figure><img src="'+t+'" alt="Claude3.5性能测评结果" tabindex="0" loading="lazy"><figcaption>Claude3.5性能测评结果</figcaption></figure><h2 id="_3-api支持" tabindex="-1"><a class="header-anchor" href="#_3-api支持" aria-hidden="true">#</a> 3. API支持</h2><p>支持通过Anthropic API、Amazon Bedrock和Google Cloud的Vertex AI进行调用</p><ul><li>Anthropic API</li><li>Amazon Bedrock</li><li>Google Cloud’s Vertex AI</li></ul><h2 id="_4-computer-use-的特点" tabindex="-1"><a class="header-anchor" href="#_4-computer-use-的特点" aria-hidden="true">#</a> 4. Computer Use 的特点</h2><p>像人类一样使用计算机--观看屏幕、移动光标、点击按钮和输入文本。</p><ul><li>1.将用户指令拆解为计算机的一个个命令 <ul><li>用户指令 <ul><li>使用我的电脑和网上的数据填写这份表格</li></ul></li><li>转化为一系列计算机指令 <ul><li>检查电子表格；</li><li>移动光标打开网页浏览器；</li><li>浏览相关网页；</li><li>使用这些网页上的数据填写表格</li></ul></li></ul></li><li>2.通过屏幕截图观察任务进度，然后使用工具执行任务</li><li>3.将光标定位到屏幕特定的位置 <ul><li>计算光标需要垂直或水平移动多少像素才能点击正确的位置</li><li>Claude在这方面做了训练，准确计算像素至关重要</li></ul></li><li>4.自我纠正和重试</li></ul><h2 id="_5-未来发展方向" tabindex="-1"><a class="header-anchor" href="#_5-未来发展方向" aria-hidden="true">#</a> 5. 未来发展方向</h2><ul><li>提高安全性</li><li>降成本</li><li>提速度</li><li>降低错误率，提升可靠性</li><li>支持更多操作 <ul><li>如拖拽、缩放等操作还不支持</li></ul></li><li>视觉大语言模型（VLM）的性能提升 <ul><li>目前的VLM普遍存在“近视眼”现象，它们从图像中只能提取出近似和抽象的视觉信息，并不像人类一样真切的看到图片</li></ul></li><li>改变观察屏幕截图到更细粒度的视频流 <ul><li>Claude观察屏幕通过截图，是 “翻书 ”式的，即截图并拼凑在一起，而不是观察更细粒度的视频流，这意味着它可能会错过短暂的操作或通知。</li></ul></li><li>视觉和代码操作的结合 <ul><li>光靠视觉，速度提升不上来，准确度也不够</li></ul></li></ul>',17);function g(x,k){const i=n("ExternalLinkIcon");return u(),s("div",null,[h,c(" more "),p,_,m,e("p",null,[e("a",f,[l("1. Introducing computer use, a new Claude 3.5 Sonnet, and Claude 3.5 Haiku"),o(i)])]),e("p",null,[e("a",b,[l("2. Developing a computer use model"),o(i)])]),C])}const I=r(d,[["render",g],["__file","007_computer_use.html.vue"]]);export{I as default};
