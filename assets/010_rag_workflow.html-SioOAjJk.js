import{_ as l,a}from"./010_rag_qa_process-OQhWWnJZ.js";import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as r,c as t,f as o,e as i}from"./app-YkV2VZ8k.js";const n={},u=i('<h1 id="rag工作流" tabindex="-1"><a class="header-anchor" href="#rag工作流" aria-hidden="true">#</a> RAG工作流</h1><ul><li><ol><li>原生数据处理流</li></ol></li><li><ol start="2"><li>问答场景中RAG的流程</li></ol></li><li><ol start="3"><li>RAG优化点</li></ol></li><li><ol start="4"><li>RAG场景中的Prompt</li></ol></li><li><ol start="5"><li>文本分割方式</li></ol></li></ul>',2),c=i('<h2 id="_1-原生数据处理流" tabindex="-1"><a class="header-anchor" href="#_1-原生数据处理流" aria-hidden="true">#</a> 1. 原生数据处理流</h2><figure><img src="'+l+'" alt="原生数据处理流" tabindex="0" loading="lazy"><figcaption>原生数据处理流</figcaption></figure><ul><li>原生数据 Raw Data</li><li>数据加载 Data Loader</li><li>数据转换（数据清洗）Data Transformer(Data Cleaning)</li><li>数据分割 Data Split <ul><li>分割为多个块 Chunk</li><li>分割大小的权衡</li></ul></li><li>数据向量化 <ul><li>将 Chunk 表示为 Vector</li><li>Text Embedding Model</li></ul></li><li>数据存储 Vector Store</li><li>数据检索 Retriever</li></ul><h2 id="_2-问答场景中rag的流程" tabindex="-1"><a class="header-anchor" href="#_2-问答场景中rag的流程" aria-hidden="true">#</a> 2. 问答场景中RAG的流程</h2><figure><img src="'+a+'" alt="问答场景中RAG的流程" tabindex="0" loading="lazy"><figcaption>问答场景中RAG的流程</figcaption></figure><ul><li>1.用户发起问题 Query</li><li>2.将用户问题 Query 使用嵌入模型 Embedding Model 向量化</li><li>3.得到向量化过的用户问题 Query Vector</li><li>4.用向量化过的用户问题 Query Vector 检索向量数据库 Vector Database <ul><li>将向量数据库用作外部知识库</li></ul></li><li>5.通过语义相似性检索出 Top k 的向量</li><li>6.将 Top K 的向量对应语义内容和用户问题 Query 作为 Prompt 调用 LLM</li><li>7.LLM 根据用户问题和检索到的数据信息给出问题的答案</li><li>8.用户得到答案</li></ul><h2 id="_3-rag优化点" tabindex="-1"><a class="header-anchor" href="#_3-rag优化点" aria-hidden="true">#</a> 3. RAG优化点</h2><ul><li>For step2 <ul><li>Query在向量化时，是否需要进行处理 -&gt; Refined Query</li></ul></li><li>For step5 <ul><li>将Recall和Ranking分开处理</li><li>Recall (召回，eg.从向量数据库召回50条相关数据) =&gt; Ranking (排序，eg.将召回的50条排序，取top3)</li></ul></li></ul><h2 id="_4-rag场景中的prompt" tabindex="-1"><a class="header-anchor" href="#_4-rag场景中的prompt" aria-hidden="true">#</a> 4. RAG场景中的Prompt</h2><ul><li>Instruction</li><li>Context =&gt; Retrieval</li><li>Input =&gt; Query</li><li>History</li></ul><h2 id="_5-文本分割方式" tabindex="-1"><a class="header-anchor" href="#_5-文本分割方式" aria-hidden="true">#</a> 5. 文本分割方式</h2><ul><li>目的 <ul><li>能够检索到和Query更相关的内容</li></ul></li><li>方式 <ul><li>根据句子来切分（split by sentences)</li><li>按照字符数，采用固定窗口来切分（fixed window character count）</li><li>按照字符数，采用滑动窗口来切分（moving window character count）</li><li>递归方法：RecursiveCharacterTextSplitter（固定窗口+语义分割；LangChain采用了此；通常采用此）</li><li>根据语义来分割（操作难度比较大；可能有些Chunk太长，有些又太短）</li></ul></li></ul>',12);function d(h,s){return r(),t("div",null,[u,o(" more "),c])}const p=e(n,[["render",d],["__file","010_rag_workflow.html.vue"]]);export{p as default};
