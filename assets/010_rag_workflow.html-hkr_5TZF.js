const e=JSON.parse('{"key":"v-f75e60c6","path":"/zh/posts/llm/010_rag_workflow.html","title":"RAG工作流与RAG优化","lang":"zh-CN","frontmatter":{"icon":"lightbulb","sidebar":false,"date":"2024-10-31T00:00:00.000Z","prev":"./011_vector_database","next":"./009_llm_challenge","category":["LLM"],"tag":["RAG","Workflow"],"description":"RAG工作流与RAG优化 原生数据处理流 问答场景中RAG的流程 RAG优化点 RAG优化","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://liz-in-tech.github.io/blog/posts/llm/010_rag_workflow.html"}],["meta",{"property":"og:url","content":"https://liz-in-tech.github.io/blog/zh/posts/llm/010_rag_workflow.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"RAG工作流与RAG优化"}],["meta",{"property":"og:description","content":"RAG工作流与RAG优化 原生数据处理流 问答场景中RAG的流程 RAG优化点 RAG优化"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-09T12:17:18.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"RAG"}],["meta",{"property":"article:tag","content":"Workflow"}],["meta",{"property":"article:published_time","content":"2024-10-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-09T12:17:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RAG工作流与RAG优化\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-09T12:17:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-in-tech\\"}]}"]]},"headers":[{"level":2,"title":"1. 原生数据处理流","slug":"_1-原生数据处理流","link":"#_1-原生数据处理流","children":[]},{"level":2,"title":"2. 问答场景中RAG的流程","slug":"_2-问答场景中rag的流程","link":"#_2-问答场景中rag的流程","children":[]},{"level":2,"title":"3. RAG优化点","slug":"_3-rag优化点","link":"#_3-rag优化点","children":[{"level":3,"title":"3.1. 原生数据处理流优化点","slug":"_3-1-原生数据处理流优化点","link":"#_3-1-原生数据处理流优化点","children":[]},{"level":3,"title":"3.2. 问答场景中RAG的流程优化点","slug":"_3-2-问答场景中rag的流程优化点","link":"#_3-2-问答场景中rag的流程优化点","children":[]}]},{"level":2,"title":"4. RAG场景中的Prompt","slug":"_4-rag场景中的prompt","link":"#_4-rag场景中的prompt","children":[]},{"level":2,"title":"5. 文本分割方式","slug":"_5-文本分割方式","link":"#_5-文本分割方式","children":[]},{"level":2,"title":"6. RAG优化 —— Query优化","slug":"_6-rag优化-——-query优化","link":"#_6-rag优化-——-query优化","children":[{"level":3,"title":"6.1. Case1：Self-Querying Retrieval","slug":"_6-1-case1-self-querying-retrieval","link":"#_6-1-case1-self-querying-retrieval","children":[]},{"level":3,"title":"6.2. Case2: MultiQueryRetriever","slug":"_6-2-case2-multiqueryretriever","link":"#_6-2-case2-multiqueryretriever","children":[]},{"level":3,"title":"6.3. Case3: 回退式提示词 Step-Back Prompting","slug":"_6-3-case3-回退式提示词-step-back-prompting","link":"#_6-3-case3-回退式提示词-step-back-prompting","children":[]},{"level":3,"title":"6.4. Case4: Query和History的结合方式","slug":"_6-4-case4-query和history的结合方式","link":"#_6-4-case4-query和history的结合方式","children":[]},{"level":3,"title":"6.5. Case5: 假设性答案  Hypothetical Answer / Hypothetical Document","slug":"_6-5-case5-假设性答案-hypothetical-answer-hypothetical-document","link":"#_6-5-case5-假设性答案-hypothetical-answer-hypothetical-document","children":[]},{"level":3,"title":"6.6. Case6: 查询重写","slug":"_6-6-case6-查询重写","link":"#_6-6-case6-查询重写","children":[]},{"level":3,"title":"6.7. Case7: 查询路由","slug":"_6-7-case7-查询路由","link":"#_6-7-case7-查询路由","children":[]}]},{"level":2,"title":"7. RAG优化 —— Retriever优化","slug":"_7-rag优化-——-retriever优化","link":"#_7-rag优化-——-retriever优化","children":[{"level":3,"title":"7.1. Case1：句子窗口检索 Sentence Window Retrieval","slug":"_7-1-case1-句子窗口检索-sentence-window-retrieval","link":"#_7-1-case1-句子窗口检索-sentence-window-retrieval","children":[]},{"level":3,"title":"7.2. Case2: 父文档检索器 Parent-child chunks retrieval /from small to big","slug":"_7-2-case2-父文档检索器-parent-child-chunks-retrieval-from-small-to-big","link":"#_7-2-case2-父文档检索器-parent-child-chunks-retrieval-from-small-to-big","children":[]},{"level":3,"title":"7.3. Case3: 混合检索 Fusion Retrieval","slug":"_7-3-case3-混合检索-fusion-retrieval","link":"#_7-3-case3-混合检索-fusion-retrieval","children":[]}]},{"level":2,"title":"8. RAG优化 —— Ranking优化","slug":"_8-rag优化-——-ranking优化","link":"#_8-rag优化-——-ranking优化","children":[{"level":3,"title":"8.1. 逆序位融合算法 RRF (Reciprocal Rank Fusion)","slug":"_8-1-逆序位融合算法-rrf-reciprocal-rank-fusion","link":"#_8-1-逆序位融合算法-rrf-reciprocal-rank-fusion","children":[]}]},{"level":2,"title":"9. RAG优化 —— Indexing优化","slug":"_9-rag优化-——-indexing优化","link":"#_9-rag优化-——-indexing优化","children":[{"level":3,"title":"9.1. 层次索引","slug":"_9-1-层次索引","link":"#_9-1-层次索引","children":[]},{"level":3,"title":"9.2. 假设性问题","slug":"_9-2-假设性问题","link":"#_9-2-假设性问题","children":[]}]},{"level":2,"title":"10. RAG优化 —— 其他优化","slug":"_10-rag优化-——-其他优化","link":"#_10-rag优化-——-其他优化","children":[{"level":3,"title":"Reference citations  参考引用","slug":"reference-citations-参考引用","link":"#reference-citations-参考引用","children":[]}]},{"level":2,"title":"11. References","slug":"_11-references","link":"#_11-references","children":[]}],"git":{"createdTime":1730566096000,"updatedTime":1731154638000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":2}]},"readingTime":{"minutes":8.22,"words":2466},"filePathRelative":"zh/posts/llm/010_rag_workflow.md","localizedDate":"2024年10月31日","excerpt":"<h1> RAG工作流与RAG优化</h1>\\n<ul>\\n<li>\\n<ol>\\n<li>原生数据处理流</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"2\\">\\n<li>问答场景中RAG的流程</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"3\\">\\n<li>RAG优化点</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"4\\">\\n<li>RAG优化</li>\\n</ol>\\n</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
