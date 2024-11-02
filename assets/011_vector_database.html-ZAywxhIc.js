import{_ as r,a as n,b as t,c as o,d,e as u,f as s,g as c,h as g,i as h,j as p,k as f,l as _,m,n as b,o as x,p as y,q as N,r as z,s as k,t as v,u as S,v as L,w,x as Q,y as P,z as W,A as I,B as V,C as l,D as q,E as H,F as K,G as A,H as D,I as E,J as M,K as B}from"./011_pq_distance-AD1rQWST.js";import{_ as C}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as R,o as O,c as F,f as T,a as i,b as G,d as j,e as a}from"./app-YkV2VZ8k.js";const J={},U=a('<h1 id="向量数据库与相似性搜索" tabindex="-1"><a class="header-anchor" href="#向量数据库与相似性搜索" aria-hidden="true">#</a> 向量数据库与相似性搜索</h1><ul><li><ol><li>向量嵌入 Vector Embeddings</li></ol></li><li><ol start="2"><li>向量之间相似度（距离）计算</li></ol></li><li><ol start="3"><li>传统推荐系统模块</li></ol></li><li><ol start="4"><li>向量数据库</li></ol></li><li><ol start="5"><li>索引算法：KNN，ANN，NSW，HNSW，PQ</li></ol></li><li><ol start="6"><li>稀疏搜索·密集搜索·混合搜索</li></ol></li></ul>',2),Y=a('<h2 id="_1-向量嵌入-vector-embeddings" tabindex="-1"><a class="header-anchor" href="#_1-向量嵌入-vector-embeddings" aria-hidden="true">#</a> 1. 向量嵌入 Vector Embeddings</h2><ul><li>向量嵌入捕捉了底层数据的含义，可以把向量嵌入看作是数据的机器可理解的格式</li><li>Embedding模型 <ul><li>开源库sentence-transformers <ul><li>可通过 Hugging Face 模型库或直接从源代码仓库获取</li><li>提供了维度在 384、512 和 768 范围内的嵌入模型</li></ul></li><li>付费API服务 <ul><li>OpenAI 嵌入 API <ul><li>维度较高，具有更高的质量，达到几千维</li></ul></li><li>Cohere 嵌入 API <ul><li>Cohere 以拥有高质量的多语言嵌入模型而闻名，其性能优于开源变体</li></ul></li></ul></li></ul></li><li>Embeddings评测排行榜：https://huggingface.co/spaces/mteb/leaderboard</li></ul><h2 id="_2-向量之间相似度-距离-计算" tabindex="-1"><a class="header-anchor" href="#_2-向量之间相似度-距离-计算" aria-hidden="true">#</a> 2. 向量之间相似度（距离）计算</h2><p>相似度越大，距离越小，两者的大小是相反的。</p><p>4种距离指标</p><p>点积和余弦距离这两个在NLP领域广泛使用</p><ul><li>欧几里得距离 Euclidean Distance(L2) <ul><li>计算最短路径</li><li>较小的值是更好的匹配</li></ul></li></ul><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>曼哈顿距离 Manhattan Distance(L1) <ul><li>每次只能以一个方向轴移动</li><li>较小的值是更好的匹配</li></ul></li></ul><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>点积 Dot Product <ul><li>一个向量在另一个向量上的投影</li><li>产生一个非规范化的值，具有任意大小</li><li>较大的值是更好的匹配，负值通常意味着实际上相距甚远</li></ul></li></ul><figure><img src="'+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>余弦距离 Cosine Distance <ul><li>计算夹角</li><li>产生一个规范化的值（介于 -1 和 1 之间）</li><li>较小的值是更好的匹配</li></ul></li></ul><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_3-传统推荐系统模块" tabindex="-1"><a class="header-anchor" href="#_3-传统推荐系统模块" aria-hidden="true">#</a> 3. 传统推荐系统模块</h2><h3 id="_3-1-分类" tabindex="-1"><a class="header-anchor" href="#_3-1-分类" aria-hidden="true">#</a> 3.1. 分类</h3><ul><li>基于内容的推荐 <ul><li>基于之前喜欢的内容</li><li>优：推荐的都是明确用户感兴趣的</li><li>缺：不会推荐之前没看过的类型</li></ul></li><li>基于协同过滤的推荐 <ul><li>推荐朋友喜欢的内容</li><li>优：会推荐之前没有看过的类型</li><li>缺：可能推荐的内容用户不感兴趣</li></ul></li></ul><h3 id="_3-2-输入" tabindex="-1"><a class="header-anchor" href="#_3-2-输入" aria-hidden="true">#</a> 3.2. 输入</h3><ul><li>1.行为（eg.看过的文章，点击的文章）</li><li>2.用户的基本信息</li><li>3.文章列表list</li></ul><h3 id="_3-3-目标" tabindex="-1"><a class="header-anchor" href="#_3-3-目标" aria-hidden="true">#</a> 3.3. 目标</h3><ul><li>推荐新的内容</li></ul><h3 id="_3-4-思路" tabindex="-1"><a class="header-anchor" href="#_3-4-思路" aria-hidden="true">#</a> 3.4. 思路</h3><ul><li>通过用户的行为和基本信息建立用户画像profile <ul><li>用户向量（和标签类似，只不过这个后面都是向量，那个是内容）</li><li>标签（喜欢的话题，不喜欢的话题，偏好等） <ul><li>用户看过的文章标签（已提供的，学出来的）的集合</li></ul></li></ul></li><li>通过标签tags从文章库中召回（Recall）候选集（Candidates） <ul><li>可以设计多次召回</li></ul></li><li>粗排+精排（Rank） <ul><li>可以设计多次排序</li><li>考虑 <ul><li>用户兴趣变化</li><li>文章的来源和时效性</li><li>用户更细致的兴趣爱好挖掘</li></ul></li></ul></li><li>top 10 文章</li></ul><h3 id="_3-5-传统推荐系统流程" tabindex="-1"><a class="header-anchor" href="#_3-5-传统推荐系统流程" aria-hidden="true">#</a> 3.5. 传统推荐系统流程</h3><p>文章-&gt;用户profile-&gt;Recall-&gt;Candidates-&gt;Rank-&gt;Top10</p><ul><li>1.文章-&gt;用户profile</li><li>2.用户profile-&gt;Recall</li><li>3.Recall-&gt;Candidates</li><li>4.Candidates-&gt;Rank</li><li>5.Rank-&gt;Top10</li></ul><h3 id="_3-6-结合llm的推荐系统" tabindex="-1"><a class="header-anchor" href="#_3-6-结合llm的推荐系统" aria-hidden="true">#</a> 3.6. 结合LLM的推荐系统</h3><p>思考，哪些流程可以加入LLM：</p><ul><li>Step1 <ul><li>采用LLM抽取Tags</li></ul></li><li>Step4 <ul><li>采用LLM进行排序</li></ul></li></ul><h2 id="_4-向量数据库" tabindex="-1"><a class="header-anchor" href="#_4-向量数据库" aria-hidden="true">#</a> 4. 向量数据库</h2><h3 id="_4-1-向量数据库-解决效率问题" tabindex="-1"><a class="header-anchor" href="#_4-1-向量数据库-解决效率问题" aria-hidden="true">#</a> 4.1. 向量数据库：解决效率问题</h3><p>向量数据库在生成式人工智能爆发前就存在了，长期以来一直是语义搜索应用程序的一部分，这些应用程序根据单词或短语的含义的相似性搜索而不是精确匹配关键词的搜索。</p><p>向量数据库的主要目标是提供一种快速高效的方法来存储和进行语义查询数据</p><ul><li>原先：和每个向量进行相似度计算</li><li>现在：近似搜索 approximate search</li></ul><h3 id="_4-2-向量数据库产品" tabindex="-1"><a class="header-anchor" href="#_4-2-向量数据库产品" aria-hidden="true">#</a> 4.2. 向量数据库产品</h3><ul><li>开源 &amp; 闭源 <ul><li>在列出的所有选项中，只有一个是完全封闭源代码：Pinecone。Zilliz 也是一个完全封闭的商业解决方案，但它完全是建立在 Milvus 之上的，并且可以看作是 Milvus 的母公司。</li></ul></li></ul><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>发展历程 <ul><li>Vespa 是最早在主流的基于 BM25 关键字搜索算法旁边加入向量相似性搜索的厂商之一。</li><li>像 Elasticsearch、Redis 和 PostgreSQL 这样的老牌厂商在2022年及之后才开始提供向量搜索，比人们原本想象的要晚得多。</li></ul></li></ul><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>托管方式 <ul><li>自托管（本地部署） <ul><li>遵循客户端-服务器架构</li></ul></li><li>托管（云原生） <ul><li>遵循客户端-服务器架构</li></ul></li><li>近期的选择：嵌入模式 <ul><li>数据库本身与应用程序代码紧密耦合，以服务器无形式运行</li><li>目前只有 Chroma 和 LanceDB 可用作嵌入式数据库</li></ul></li></ul></li></ul><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-3-向量数据库比较" tabindex="-1"><a class="header-anchor" href="#_4-3-向量数据库比较" aria-hidden="true">#</a> 4.3. 向量数据库比较</h3><ul><li>权衡选择 <ul><li>混合搜索还是关键词搜索？关键词+向量搜索的混合可以产生最佳结果，每个向量数据库供应商都意识到了这一点，并提供了自己定制的混合搜索解决方案。</li><li>部署在本地还是云原生？许多供应商将“云原生”作为卖点，好像基础设施是全球最大的痛点，但本地部署在长期内可能更经济实惠，因此更加有效。</li><li>开源还是完全托管？大多数供应商都是在源代码可获得或开源代码基础上构建的，以展示其基本方法，然后通过完全托管的SaaS来实现部署和基础设施的部分。虽然仍然有可能自行托管很多解决方案，但这需要额外的人力和内部技能要求。</li></ul></li></ul><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+g+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-4-索引算法" tabindex="-1"><a class="header-anchor" href="#_4-4-索引算法" aria-hidden="true">#</a> 4.4. 索引算法</h3><p>数据通过索引存储在向量数据库中，这指的是创建称为索引的数据结构，以便通过快速缩小搜索空间来进行向量的高效查找。</p><p>就像在大多数情况下一样，选择一个向量索引涉及精度（准确率/召回率）与速度/吞吐量之间的权衡。</p><ul><li>BM25</li><li>IVF（Inverted File，反向文件索引）</li><li>HNSW（分层可导航小世界）</li><li>PQ</li><li>Flat</li><li>RHNSW</li><li>Vamana（在 DiskANN 实现中使用）</li></ul><figure><img src="'+h+'" alt="各向量数据库采用的索引算法" tabindex="0" loading="lazy"><figcaption>各向量数据库采用的索引算法</figcaption></figure><figure><img src="'+p+'" alt="基于底层数据结构的向量索引分类" tabindex="0" loading="lazy"><figcaption>基于底层数据结构的向量索引分类</figcaption></figure><h3 id="_4-5-索引评价标准" tabindex="-1"><a class="header-anchor" href="#_4-5-索引评价标准" aria-hidden="true">#</a> 4.5. 索引评价标准</h3><p>评价一个索引的好坏总是依赖于具体的数据模型的，总体来说包含如下几点：</p><ul><li>查询时间。查询的速度是非常关键的，在大模型中尤为重视。</li><li>查询质量。ANN查询不会总是返回最精准的结果，但查询质量也不能偏差过大，而查询质量也有很多指标，其中包括最常用的召回率。</li><li>内存消耗。查询索引所消耗的内存，在内存上查找明显比在磁盘上查找更快。</li><li>训练时间。有些查询方法需要训练才能达到较好的状态。</li><li>写入时间。写入向量时对索引的影响，以及包含所有维护。</li></ul><h2 id="_5-搜索" tabindex="-1"><a class="header-anchor" href="#_5-搜索" aria-hidden="true">#</a> 5. 搜索</h2><h3 id="_5-1-稀疏搜索-关键词搜索-vs-密集搜索-向量搜索-语义搜索" tabindex="-1"><a class="header-anchor" href="#_5-1-稀疏搜索-关键词搜索-vs-密集搜索-向量搜索-语义搜索" aria-hidden="true">#</a> 5.1. 稀疏搜索(关键词搜索) vs 密集搜索(向量搜索/语义搜索)</h3><ul><li>稀疏搜索（关键词搜索）Sparse search <ul><li>关键词搜索，文本匹配</li></ul></li><li>密集搜索（向量搜索/语义搜索）Dense Search <ul><li>向量相似性搜索</li><li>在向量空间中搜索最接近的对象，这就是所谓的语义搜索或向量搜索</li><li>eg.&quot;Baby dogs&quot; &lt;=&gt; &quot;Here is content on puppies!&quot;</li><li>局限性： <ul><li>会受采用的Embedding模型的影响，向量相似只是在训练的数据集中数据的表现，如果搜索的内容与训练Embedding模型的数据集相差甚远，那搜索结果会很差，因为搜索的内容分布与Embedding的数据分布不一样</li><li>向量真的能代表语义吗，可以看作是哈希，并不是真正的理解，很容易捕风捉影</li><li>向量数据量大的话，搜索准确度会大幅下降（参考https://mp.weixin.qq.com/s/DH4-QCK1U8BYGlAblQLTLw）</li><li>像序列数字，表格数据等没有语义信息的，就很不适合用此来搜索</li></ul></li></ul></li><li>混合搜索 Hybird Search <ul><li>融合稀疏搜索和密集搜索的结果返回的排名结果</li></ul></li></ul><h3 id="_5-2-稀疏搜索" tabindex="-1"><a class="header-anchor" href="#_5-2-稀疏搜索" aria-hidden="true">#</a> 5.2. 稀疏搜索</h3><figure><img src="'+f+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>词袋 Bag of Words</p><p>最简单的关键词匹配方法是使用词袋--计算一个词在查询和数据向量中出现的次数，然后返回匹配词频率最高的对象。</p><p>在实际上，可能只会捕捉到可用单词的百分之一，所以数据中将会有很多零。</p><h3 id="_5-3-混合搜索" tabindex="-1"><a class="header-anchor" href="#_5-3-混合搜索" aria-hidden="true">#</a> 5.3. 混合搜索</h3><p>通过设置相应的权重比例，来将两种搜索结果合为一个</p><figure><img src="'+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_5-4-多语言搜索" tabindex="-1"><a class="header-anchor" href="#_5-4-多语言搜索" aria-hidden="true">#</a> 5.4. 多语言搜索</h3><p>在多语言搜索情况下，相同含义但不同语言的文本，将生成非常相似的（如果不是相同的话）嵌入</p><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6-关键词匹配算法-bm25-best-matching-25-最佳匹配25" tabindex="-1"><a class="header-anchor" href="#_6-关键词匹配算法-bm25-best-matching-25-最佳匹配25" aria-hidden="true">#</a> 6. 关键词匹配算法：BM25 （Best Matching 25, 最佳匹配25）</h2><p>属于稀疏搜索（关键词搜索）</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当涉及跨多个关键词搜索时，它实际上表现得非常好。</p><p>思想：统计传入的短语中单词的数量，然后出现更频繁的单词在匹配发生时被加权为不太重要，但是那些更稀有的单词得分就会高得多。</p><h2 id="_7-倒排索引-倒排文件索引-反向文件索引-inverted-index-inverted-file-index-ivf-快速搜索文本" tabindex="-1"><a class="header-anchor" href="#_7-倒排索引-倒排文件索引-反向文件索引-inverted-index-inverted-file-index-ivf-快速搜索文本" aria-hidden="true">#</a> 7. 倒排索引/倒排文件索引/反向文件索引（Inverted Index / Inverted File Index，IVF）- 快速搜索文本</h2><p>属于稀疏搜索（关键词搜索）</p><p>谷歌、百度搜索引擎都有用到，非常适合文本的检索</p><p>正向索引：DocId-&gt;Value<br> 反向索引：Value-&gt;DocId</p><figure><img src="'+x+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>1.将文档中停用词表（功能词，没有什么实际含义，几乎每个文档中都会用到的词）外的其他词抽取出来</li><li>2.每个词和其所在的多个文档ID建立映射关系</li><li>3.查询关键词，通过关键词就可召回（Recall）到该词所在的所有文档</li><li>4.查询一句话，一句话有多个关键词，根据每个关键词召回对应文档，再取交集，排序（ranking）后返回top k的文档作为结果</li></ul><h2 id="_8-knn-最近邻算法-knn搜索-蛮力搜索" tabindex="-1"><a class="header-anchor" href="#_8-knn-最近邻算法-knn搜索-蛮力搜索" aria-hidden="true">#</a> 8. KNN (最近邻算法, KNN搜索，蛮力搜索)</h2><p>蛮力搜索：和每个向量进行相似度计算</p><p>在经典机器学习中，这被称为K-最近邻算法（KNN，K Nearest Neighbours）</p><p>将查询向量与数据库中的每个向量进行比较</p><ul><li>1.给定一个Query，找到所有向量和Query向量之间的距离</li><li>2.对所有距离进行排序</li><li>3.最终返回距离最近的前K个匹配对象</li></ul><figure><img src="'+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>问题在于蛮力搜索伴随着巨大的计算成本，总体查询时间随着存储的对象数量的增加而增加</p><p>拥有的向量越多，查询需要的时间就越长，而在实际应用场景中，将处理数千万甚至数亿个对象</p><figure><img src="'+N+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>优：精确</li><li>缺：计算量大，耗时长，时间复杂度O(n)</li></ul><h2 id="_9-近似knn-把空间分成若干个模块" tabindex="-1"><a class="header-anchor" href="#_9-近似knn-把空间分成若干个模块" aria-hidden="true">#</a> 9. 近似KNN-把空间分成若干个模块</h2><figure><img src="'+z+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+k+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>1.使用聚类算法（如K-means）初始k个聚类中心(也叫质心 centroids)</li><li>2.计算每个样本到质心的距离并将样本分配到最近的质心，由此组成聚类</li><li>3.以这些质心和聚类所属的样本划分空间，此时我们就得到了沃罗诺伊图（Voronoi Diagram) <ul><li>Voronoi图的主要性质是，从一个质心到其区域中任何一点的距离小于从该点到另一个质心的距离。</li></ul></li><li>4.给定一个Query，查询Query距离每个质心的距离，找到Query所在的空间 <ul><li>当给定一个新对象时，将计算到Voronoi分区的所有质心的距离。然后选择距离最小的质心，然后将包含在该分区中的向量作为候选。</li></ul></li><li>5.Query再与质心所在空间中所有节点计算距离 <ul><li>通过计算到候选者的距离并选择最接近的前k个，返回最终答案</li></ul></li></ul><p>设有k个质心，那每个空间节点数平均为n/k，则时间复杂度为O(k + n/k)</p><h3 id="_9-1-边界问题" tabindex="-1"><a class="header-anchor" href="#_9-1-边界问题" aria-hidden="true">#</a> 9.1. 边界问题</h3><p>在下图中，我们可以看到这样一种情况：实际最近的邻居位于红色区域，但我们只从绿色区域中选择候选人。这种情况被称为边缘问题。</p><figure><img src="'+v+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>边界问题本质是因为：</p><p>voronio图只能保证某节点到其区域质心的距离小于到其他质心的距离，但不保证某节点到区域内其他节点的距离小于到其他区域节点的距离</p><p>如何解决：扩大搜索范围</p><p>这种情况通常发生在查询对象位于与另一个区域的边界附近时。为了减少这种情况下的错误数量，我们可以增加搜索范围，并根据距离对象最近的前m个质心选择几个区域来搜索候选者。</p><figure><img src="'+S+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>扩大搜索范围的时间复杂度为O(k + 3 * n/k)</p><p>搜索的区域越多，结果就越准确，计算它们所需的时间也就越多。需要在准确性和耗时之间权衡选择。</p><h2 id="_10-ann-approximate-nearest-neighbours-近似最近邻算法" tabindex="-1"><a class="header-anchor" href="#_10-ann-approximate-nearest-neighbours-近似最近邻算法" aria-hidden="true">#</a> 10. ANN（Approximate Nearest Neighbours，近似最近邻算法）</h2><p>并不总能找到最佳匹配，但是找到了近似的最近邻匹配，这仍然是一个相当不错的结果，但不一定是完美的结果</p><p>牺牲一些准确性（并不总是返回真正的最近邻），但可以通过使用 ANN 算法获得大幅的性能提升</p><ul><li>NSW</li><li>HNSW</li></ul><h2 id="_11-nsw-navigable-small-world-可导航小世界" tabindex="-1"><a class="header-anchor" href="#_11-nsw-navigable-small-world-可导航小世界" aria-hidden="true">#</a> 11. NSW（Navigable Small World，可导航小世界）</h2><h3 id="_11-1-图的构建-one-by-one" tabindex="-1"><a class="header-anchor" href="#_11-1-图的构建-one-by-one" aria-hidden="true">#</a> 11.1. 图的构建（one by one）</h3><figure><img src="'+L+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><p>m=2 邻居有几个，也就是和几个节点相连</p></li><li><p>高速公路思想</p><ul><li>刚开始构建的连线可能很长，因为是一个一个连接的，没有更好更近的选择，并不是和最近的相连，越到后面，连的越密，连线可能越短越近</li><li>这样连线有个好处，就是高速公路思想，刚开始的距离远的连线就像高速公路一样，有些路可以不用走很多小路就可走很远，经历中间节点少，提高了搜索效率</li></ul></li><li><p>构造复杂度：O(n^2)</p><ul><li>第i个节点是与之前i-1个节点做比较</li></ul></li></ul><h3 id="_11-2-搜索" tabindex="-1"><a class="header-anchor" href="#_11-2-搜索" aria-hidden="true">#</a> 11.2. 搜索</h3><ul><li>1.从一个随即入口节点开始，沿着最近的邻居向Query移动</li><li>2.保留最大的k个点=&gt;priority queue</li></ul><figure><img src="'+w+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+Q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+P+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>查询复杂度：O(nlogn)</li><li>问题：找不到下一步？早停 <ul><li>早停。当前节点的两个邻居离查询更远。因此，算法将当前节点作为响应返回，尽管存在比查询更接近的节点。</li><li>改善：使用多个入口点可以提高搜索精度。</li></ul></li></ul><figure><img src="'+W+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_12-hnsw-hierarchical-navigable-small-world-分层可导航小世界" tabindex="-1"><a class="header-anchor" href="#_12-hnsw-hierarchical-navigable-small-world-分层可导航小世界" aria-hidden="true">#</a> 12. HNSW (Hierarchical Navigable Small World，分层可导航小世界)</h2><ul><li>HNSW算法：NSW 结合 Skip List 思想 <ul><li>HNSW是NSW基于跳表Skip List的优化</li><li>对于 NSW 中所提的高速公路思想的话，是明确区分了的高速公路，可以想象成每层分别是：飞机、火车、汽车、自行车、步行</li></ul></li><li>它推动了世界上最强大的向量数据库 <ul><li>大多数向量数据库都用到了此</li></ul></li></ul><figure><img src="'+I+'" alt="Skip List" tabindex="0" loading="lazy"><figcaption>Skip List</figcaption></figure><h3 id="_12-1-构建-分层结构" tabindex="-1"><a class="header-anchor" href="#_12-1-构建-分层结构" aria-hidden="true">#</a> 12.1. 构建-分层结构</h3><ul><li>分为几层，每层与NSW的构建方式相似，节点的数量从上到下依次增多，最底层包含了所有节点。</li><li>如何将节点分层？ <ul><li>为每个节点生成一个随机数，作为分配到的该节点的最大层Max Layer，那么该节点会分配到Max Layer和所有下面的层。例如，随机数是零，那么该节点只存在于底层，即零层。如果随机数是2，那么该节点将存在于零层、一层和二层，依此类推。</li></ul></li><li>构建复杂度：O(n·logn)</li></ul><figure><img src="'+V+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_12-2-查询" tabindex="-1"><a class="header-anchor" href="#_12-2-查询" aria-hidden="true">#</a> 12.2. 查询</h3><ul><li>查询过程 <ul><li>1.在顶层，从一个随即入口节点开始，沿着最近的邻居移动</li><li>2.移动到该层中最近的节点</li><li>3.进入下一层，沿着最近的邻居移动，找该层最近的节点，直到最底层</li></ul></li></ul><figure><img src="'+q+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+H+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>查询复杂度：O(logn) <ul><li>查询时间呈对数增长，随着数据量的增加，速度并不会随时间而受到太大的影响</li></ul></li></ul><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_12-3-进一步优化-hnsw-近似knn" tabindex="-1"><a class="header-anchor" href="#_12-3-进一步优化-hnsw-近似knn" aria-hidden="true">#</a> 12.3. 进一步优化：HNSW + 近似KNN</h3><figure><img src="'+K+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_13-乘积量化-product-quantization-pq" tabindex="-1"><a class="header-anchor" href="#_13-乘积量化-product-quantization-pq" aria-hidden="true">#</a> 13. 乘积量化 Product Quantization (PQ)</h2><p>提高search效率同时，压缩数据，减少内存使用</p><p>核心：</p><ul><li>fast <ul><li>时间复杂度O(向量个数 * (subspace/dimension))</li></ul></li><li>compression <ul><li>数据压缩：假设向量数据库中每个向量为1024维，分为4个256维子向量，那么向量数据库中每个向量从1024个float转换为了4个int，大大压缩了数据所需的存储空间。</li></ul></li></ul><p>乘积量化（Product Quantization）旨在减少内存使用，还可以提升查询速度（因为计算量减少了）。PQ是一种有损压缩方法，这会导致向量检索的准确性降低，不过这在ANN需求中是可行的。</p><h3 id="_13-1-构建" tabindex="-1"><a class="header-anchor" href="#_13-1-构建" aria-hidden="true">#</a> 13.1. 构建</h3><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>步骤描述：</p><ul><li>1.subvectors–将原始的高维向量切分成n个低维子向量 <ul><li>eg. 假设向量数据库中每个向量为1024维，分为4个256维子向量</li></ul></li><li>2.codebook–将n个各自所有的子向量通过k-means算法计算各自的voronoi图（或者其他算法），计算出来有n个不同的voronoi图，这些voronoi图就是codebook（这里假设每个voronoi图都有k个质心） <ul><li>计算出4个voronoi图，每个子向量对应一个</li></ul></li><li>3.clustering–把n个子向量放进各自已聚类完成的voronoi图中计算出最近质心centroid <ul><li>每个voronoi图中分为k个子空间，每个有一个质心</li></ul></li><li>4.quantized vectors–将这n个最近质心当做新的向量-》量化后向量 <ul><li>每个子向量有邻近的质心</li></ul></li><li>5.reproduction values–以n个子空间的各自最近质心的编号为新值，合起来称为PQ code <ul><li>每个子向量将最近质心的编号作为新值，每个向量就有4个新值</li><li>那么向量数据库中每个向量被表示为4个值，也就是PQ code</li></ul></li></ul><figure><img src="'+E+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据n个子向量和每个子空间的中的k个质心，我们可以得到一个n*k的质心矩阵。取每个子向量的最近质心的编号，就是PQ code。</p><h3 id="_13-2-查询" tabindex="-1"><a class="header-anchor" href="#_13-2-查询" aria-hidden="true">#</a> 13.2. 查询</h3><p>通过PQ code找到质心，在质心所在的子空间中找KNN，查询向量query与已存在向量y的距离，通过向量query与y的质心来近似替代。</p><p>查询步骤：</p><ul><li>1.查询向量分成为多个子向量</li><li>2.计算查询向量子向量和质心矩阵的距离（查询向量子向量到每个质心的距离），得到距离矩阵</li><li>3.查询向量和向量数据库中每个向量的距离，通过向量数据库中向量的PQ code，找到对应的质心，进而从距离矩阵中找到每个查询子向量对应的距离，将每个子向量对应距离平方后相加再开根号，计算出查询向量与向量数据库中任意一个向量的近似距离</li></ul><figure><img src="'+M+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+B+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_13-3-进一步优化" tabindex="-1"><a class="header-anchor" href="#_13-3-进一步优化" aria-hidden="true">#</a> 13.3. 进一步优化</h3><p>在PQ基础上，再结合近似KNN，做到不必和向量数据库中每个向量都进行计算距离</p><h2 id="_14-references" tabindex="-1"><a class="header-anchor" href="#_14-references" aria-hidden="true">#</a> 14. References</h2>',155),Z={href:"https://hub.baai.ac.cn/view/29516",target:"_blank",rel:"noopener noreferrer"},X=i("p",null,"https://www.modb.pro/db/1817186648364507136",-1),$=i("p",null,"https://www.xiaozhuai.com/similarity-search-part-4-hierarchical-navigable-small-world-hnsw.html",-1);function ii(li,ai){const e=R("ExternalLinkIcon");return O(),F("div",null,[U,T(" more "),Y,i("p",null,[i("a",Z,[G("大模型中间件 向量数据库原理和选择"),j(e)])]),X,$])}const ti=C(J,[["render",ii],["__file","011_vector_database.html.vue"]]);export{ti as default};
