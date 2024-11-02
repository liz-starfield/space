const e=JSON.parse('{"key":"v-6f26e15e","path":"/zh/posts/llm/013_optimizing_llm.html","title":"优化LLM的最佳实践（提示工程、RAG和微调）","lang":"zh-CN","frontmatter":{"icon":"lightbulb","sidebar":false,"date":"2024-11-02T00:00:00.000Z","prev":false,"next":"./012_prompt_engineering","category":["LLM"],"tag":["LLM","Prompt Engineering","RAG","Fine-tuning"],"description":"优化LLM的最佳实践（提示工程、RAG和微调）","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://liz-in-tech.github.io/blog/posts/llm/013_optimizing_llm.html"}],["meta",{"property":"og:url","content":"https://liz-in-tech.github.io/blog/zh/posts/llm/013_optimizing_llm.html"}],["meta",{"property":"og:site_name","content":"Liz"}],["meta",{"property":"og:title","content":"优化LLM的最佳实践（提示工程、RAG和微调）"}],["meta",{"property":"og:description","content":"优化LLM的最佳实践（提示工程、RAG和微调）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-02T16:48:16.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"LLM"}],["meta",{"property":"article:tag","content":"Prompt Engineering"}],["meta",{"property":"article:tag","content":"RAG"}],["meta",{"property":"article:tag","content":"Fine-tuning"}],["meta",{"property":"article:published_time","content":"2024-11-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-02T16:48:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"优化LLM的最佳实践（提示工程、RAG和微调）\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-11-02T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-02T16:48:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-in-tech\\"}]}"]]},"headers":[{"level":2,"title":"1. 优化LLM的挑战","slug":"_1-优化llm的挑战","link":"#_1-优化llm的挑战","children":[]},{"level":2,"title":"2. 优化策略","slug":"_2-优化策略","link":"#_2-优化策略","children":[]},{"level":2,"title":"3. 典型的优化流程","slug":"_3-典型的优化流程","link":"#_3-典型的优化流程","children":[]},{"level":2,"title":"4. 优化方法比较","slug":"_4-优化方法比较","link":"#_4-优化方法比较","children":[]},{"level":2,"title":"5. 通过提示工程进行优化","slug":"_5-通过提示工程进行优化","link":"#_5-通过提示工程进行优化","children":[]},{"level":2,"title":"使用RAG好处","slug":"使用rag好处","link":"#使用rag好处","children":[]},{"level":2,"title":"6. 如何评估RAG","slug":"_6-如何评估rag","link":"#_6-如何评估rag","children":[{"level":3,"title":"6.1 与LLM相关的指标","slug":"_6-1-与llm相关的指标","link":"#_6-1-与llm相关的指标","children":[]},{"level":3,"title":"6.2 与上下文相关的指标","slug":"_6-2-与上下文相关的指标","link":"#_6-2-与上下文相关的指标","children":[]}]},{"level":2,"title":"7. 通过微调进行优化","slug":"_7-通过微调进行优化","link":"#_7-通过微调进行优化","children":[]},{"level":2,"title":"8. 微调中的最佳实践","slug":"_8-微调中的最佳实践","link":"#_8-微调中的最佳实践","children":[]},{"level":2,"title":"9. 微调 + RAG 的最佳实践","slug":"_9-微调-rag-的最佳实践","link":"#_9-微调-rag-的最佳实践","children":[]},{"level":2,"title":"10. OpenAI RAG 调优案例","slug":"_10-openai-rag-调优案例","link":"#_10-openai-rag-调优案例","children":[{"level":3,"title":"10.1. 未成功的实验","slug":"_10-1-未成功的实验","link":"#_10-1-未成功的实验","children":[]},{"level":3,"title":"10.2. 成功的实验","slug":"_10-2-成功的实验","link":"#_10-2-成功的实验","children":[]}]},{"level":2,"title":"11. OpenAI 微调 + RAG 调优案例","slug":"_11-openai-微调-rag-调优案例","link":"#_11-openai-微调-rag-调优案例","children":[]},{"level":2,"title":"12. 参考内容","slug":"_12-参考内容","link":"#_12-参考内容","children":[]}],"git":{"createdTime":1730566096000,"updatedTime":1730566096000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":7.74,"words":2323},"filePathRelative":"zh/posts/llm/013_optimizing_llm.md","localizedDate":"2024年11月2日","excerpt":"<h1> 优化LLM的最佳实践（提示工程、RAG和微调）</h1>\\n","autoDesc":true}');export{e as data};
