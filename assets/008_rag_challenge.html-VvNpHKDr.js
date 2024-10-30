const l=JSON.parse('{"key":"v-6da7450a","path":"/zh/posts/llm/008_rag_challenge.html","title":"RAG技术的应用落地挑战","lang":"zh-CN","frontmatter":{"icon":"lightbulb","sidebar":false,"date":"2024-10-31T00:00:00.000Z","prev":false,"next":"./007_computer_use","category":["LLM"],"tag":["RAG","Challenge"],"description":"RAG技术的应用落地挑战","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://liz-in-tech.github.io/blog/posts/llm/008_rag_challenge.html"}],["meta",{"property":"og:url","content":"https://liz-in-tech.github.io/blog/zh/posts/llm/008_rag_challenge.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"RAG技术的应用落地挑战"}],["meta",{"property":"og:description","content":"RAG技术的应用落地挑战"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-30T19:47:05.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"RAG"}],["meta",{"property":"article:tag","content":"Challenge"}],["meta",{"property":"article:published_time","content":"2024-10-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-30T19:47:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"RAG技术的应用落地挑战\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-30T19:47:05.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-in-tech\\"}]}"]]},"headers":[{"level":2,"title":"1. 数据检索与处理","slug":"_1-数据检索与处理","link":"#_1-数据检索与处理","children":[{"level":3,"title":"1.1. 高效检索机制的实现","slug":"_1-1-高效检索机制的实现","link":"#_1-1-高效检索机制的实现","children":[]},{"level":3,"title":"1.2. 数据质量与维护","slug":"_1-2-数据质量与维护","link":"#_1-2-数据质量与维护","children":[]}]},{"level":2,"title":"2. 生成优化与模型设计","slug":"_2-生成优化与模型设计","link":"#_2-生成优化与模型设计","children":[{"level":3,"title":"2.1. Prompt设计与生成质量","slug":"_2-1-prompt设计与生成质量","link":"#_2-1-prompt设计与生成质量","children":[]},{"level":3,"title":"2.2. 知识整合与逻辑一致性","slug":"_2-2-知识整合与逻辑一致性","link":"#_2-2-知识整合与逻辑一致性","children":[]}]},{"level":2,"title":"3. 领域知识与模型适应性","slug":"_3-领域知识与模型适应性","link":"#_3-领域知识与模型适应性","children":[{"level":3,"title":"3.1. 领域知识理解的局限","slug":"_3-1-领域知识理解的局限","link":"#_3-1-领域知识理解的局限","children":[]},{"level":3,"title":"3.2. 多任务学习与泛化能力","slug":"_3-2-多任务学习与泛化能力","link":"#_3-2-多任务学习与泛化能力","children":[]}]},{"level":2,"title":"4. 规模化与性能优化","slug":"_4-规模化与性能优化","link":"#_4-规模化与性能优化","children":[{"level":3,"title":"4.1. 计算资源与延迟","slug":"_4-1-计算资源与延迟","link":"#_4-1-计算资源与延迟","children":[]},{"level":3,"title":"4.2. 系统扩展性","slug":"_4-2-系统扩展性","link":"#_4-2-系统扩展性","children":[]}]},{"level":2,"title":"5. QA数据生成与管理","slug":"_5-qa数据生成与管理","link":"#_5-qa数据生成与管理","children":[{"level":3,"title":"5.1. 问答对数据的生成","slug":"_5-1-问答对数据的生成","link":"#_5-1-问答对数据的生成","children":[]},{"level":3,"title":"5.2. 数据质量控制","slug":"_5-2-数据质量控制","link":"#_5-2-数据质量控制","children":[]}]},{"level":2,"title":"6. 错误处理与系统鲁棒性","slug":"_6-错误处理与系统鲁棒性","link":"#_6-错误处理与系统鲁棒性","children":[{"level":3,"title":"6.1. 错误传播","slug":"_6-1-错误传播","link":"#_6-1-错误传播","children":[]},{"level":3,"title":"6.2. 歧义和不确定性的处理","slug":"_6-2-歧义和不确定性的处理","link":"#_6-2-歧义和不确定性的处理","children":[]}]},{"level":2,"title":"7. 上下文理解与对话管理（引入RAG后，加重了这个问题）","slug":"_7-上下文理解与对话管理-引入rag后-加重了这个问题","link":"#_7-上下文理解与对话管理-引入rag后-加重了这个问题","children":[{"level":3,"title":"7.1. 长程上下文保持","slug":"_7-1-长程上下文保持","link":"#_7-1-长程上下文保持","children":[]},{"level":3,"title":"7.2. 上下文相关性","slug":"_7-2-上下文相关性","link":"#_7-2-上下文相关性","children":[]}]},{"level":2,"title":"8. 系统集成与部署","slug":"_8-系统集成与部署","link":"#_8-系统集成与部署","children":[{"level":3,"title":"8.1. 与现有系统的兼容性","slug":"_8-1-与现有系统的兼容性","link":"#_8-1-与现有系统的兼容性","children":[]},{"level":3,"title":"8.2. 部署和维护成本","slug":"_8-2-部署和维护成本","link":"#_8-2-部署和维护成本","children":[]}]},{"level":2,"title":"9. 模型可解释性与透明度","slug":"_9-模型可解释性与透明度","link":"#_9-模型可解释性与透明度","children":[{"level":3,"title":"9.1. 决策过程的可解释性","slug":"_9-1-决策过程的可解释性","link":"#_9-1-决策过程的可解释性","children":[]},{"level":3,"title":"9.2. 结果溯源","slug":"_9-2-结果溯源","link":"#_9-2-结果溯源","children":[]}]},{"level":2,"title":"10. 多模态支持与跨模态融合","slug":"_10-多模态支持与跨模态融合","link":"#_10-多模态支持与跨模态融合","children":[{"level":3,"title":"10.1. 多模态信息的统一表示","slug":"_10-1-多模态信息的统一表示","link":"#_10-1-多模态信息的统一表示","children":[]},{"level":3,"title":"10.2. 跨模态检索与生成","slug":"_10-2-跨模态检索与生成","link":"#_10-2-跨模态检索与生成","children":[]}]},{"level":2,"title":"11. 评价指标与评估方法","slug":"_11-评价指标与评估方法","link":"#_11-评价指标与评估方法","children":[{"level":3,"title":"11.1. 缺乏统一的评估标准","slug":"_11-1-缺乏统一的评估标准","link":"#_11-1-缺乏统一的评估标准","children":[]},{"level":3,"title":"11.2. 自动化评估的困难","slug":"_11-2-自动化评估的困难","link":"#_11-2-自动化评估的困难","children":[]}]},{"level":2,"title":"12. 用户个性化与系统适应性","slug":"_12-用户个性化与系统适应性","link":"#_12-用户个性化与系统适应性","children":[{"level":3,"title":"12.1. 个性化响应生成","slug":"_12-1-个性化响应生成","link":"#_12-1-个性化响应生成","children":[]},{"level":3,"title":"12.2. 在线学习与自适应","slug":"_12-2-在线学习与自适应","link":"#_12-2-在线学习与自适应","children":[]}]},{"level":2,"title":"13. 跨语言与多语言支持","slug":"_13-跨语言与多语言支持","link":"#_13-跨语言与多语言支持","children":[{"level":3,"title":"13.1. 多语言能力","slug":"_13-1-多语言能力","link":"#_13-1-多语言能力","children":[]},{"level":3,"title":"13.2. 跨语言信息检索","slug":"_13-2-跨语言信息检索","link":"#_13-2-跨语言信息检索","children":[]}]},{"level":2,"title":"14. 深度优化与未来方向","slug":"_14-深度优化与未来方向","link":"#_14-深度优化与未来方向","children":[{"level":3,"title":"14.1. 检索与生成的协同优化","slug":"_14-1-检索与生成的协同优化","link":"#_14-1-检索与生成的协同优化","children":[]},{"level":3,"title":"14.2. 动态知识整合","slug":"_14-2-动态知识整合","link":"#_14-2-动态知识整合","children":[]},{"level":3,"title":"14.3. 情感和语气的把握（拟人化回答，角色扮演质量：性格一致性、知识一致性、语气一致性）","slug":"_14-3-情感和语气的把握-拟人化回答-角色扮演质量-性格一致性、知识一致性、语气一致性","link":"#_14-3-情感和语气的把握-拟人化回答-角色扮演质量-性格一致性、知识一致性、语气一致性","children":[]},{"level":3,"title":"14.4. 拒答策略","slug":"_14-4-拒答策略","link":"#_14-4-拒答策略","children":[]}]},{"level":2,"title":"15. 核心挑战","slug":"_15-核心挑战","link":"#_15-核心挑战","children":[]}],"git":{"createdTime":1730317625000,"updatedTime":1730317625000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":8.67,"words":2600},"filePathRelative":"zh/posts/llm/008_rag_challenge.md","localizedDate":"2024年10月31日","excerpt":"<h1> RAG技术的应用落地挑战</h1>\\n","autoDesc":true}');export{l as data};
