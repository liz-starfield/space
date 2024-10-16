const e=JSON.parse('{"key":"v-d0356272","path":"/zh/posts/LLM/llama_advanced.html","title":"Llama进阶","lang":"zh-CN","frontmatter":{"icon":"lightbulb","date":"2024-06-01T00:00:00.000Z","sticky":true,"star":true,"category":["LLM"],"tag":["LLM"],"description":"Llama进阶 LayerNorm(Layer Normalization，层归一化) Attention 超参数 张量维度转换 可训练参数量 源码","head":[["meta",{"property":"og:url","content":"https://liz-starfield.github.io/blog/zh/posts/LLM/llama_advanced.html"}],["meta",{"property":"og:site_name","content":"莉芝"}],["meta",{"property":"og:title","content":"Llama进阶"}],["meta",{"property":"og:description","content":"Llama进阶 LayerNorm(Layer Normalization，层归一化) Attention 超参数 张量维度转换 可训练参数量 源码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-16T06:02:20.000Z"}],["meta",{"property":"article:author","content":"Liz"}],["meta",{"property":"article:tag","content":"LLM"}],["meta",{"property":"article:published_time","content":"2024-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-16T06:02:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Llama进阶\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-16T06:02:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Liz\\",\\"url\\":\\"https://github.com/liz-starfield\\"}]}"]]},"headers":[{"level":2,"title":"1. LayerNorm(Layer Normalization，层归一化)","slug":"_1-layernorm-layer-normalization-层归一化","link":"#_1-layernorm-layer-normalization-层归一化","children":[{"level":3,"title":"1.1. LayerNorm的计算公式","slug":"_1-1-layernorm的计算公式","link":"#_1-1-layernorm的计算公式","children":[]},{"level":3,"title":"1.2. BatchNorm和LayerNorm","slug":"_1-2-batchnorm和layernorm","link":"#_1-2-batchnorm和layernorm","children":[]},{"level":3,"title":"1.3. Normalization的几何意义","slug":"_1-3-normalization的几何意义","link":"#_1-3-normalization的几何意义","children":[]},{"level":3,"title":"1.4. RMSNorm","slug":"_1-4-rmsnorm","link":"#_1-4-rmsnorm","children":[]},{"level":3,"title":"1.4. Normalization对Attention的重要性","slug":"_1-4-normalization对attention的重要性","link":"#_1-4-normalization对attention的重要性","children":[]}]},{"level":2,"title":"3. llama为什么不用encoder-decoder,而只用decoder","slug":"_3-llama为什么不用encoder-decoder-而只用decoder","link":"#_3-llama为什么不用encoder-decoder-而只用decoder","children":[]},{"level":2,"title":"4. attention计算为什么要除根号d","slug":"_4-attention计算为什么要除根号d","link":"#_4-attention计算为什么要除根号d","children":[]},{"level":2,"title":"5. attention公式的计算优化","slug":"_5-attention公式的计算优化","link":"#_5-attention公式的计算优化","children":[]},{"level":2,"title":"6. kv_cache,group+kv_cache省了哪一部分计算，省了多少","slug":"_6-kv-cache-group-kv-cache省了哪一部分计算-省了多少","link":"#_6-kv-cache-group-kv-cache省了哪一部分计算-省了多少","children":[]},{"level":2,"title":"7. 旋转位置编码的长度外推是怎么做的","slug":"_7-旋转位置编码的长度外推是怎么做的","link":"#_7-旋转位置编码的长度外推是怎么做的","children":[]},{"level":2,"title":"8. 能不能自定义特殊token","slug":"_8-能不能自定义特殊token","link":"#_8-能不能自定义特殊token","children":[]},{"level":2,"title":"9. pytorch的通用算子汇总(公式和输入输出)","slug":"_9-pytorch的通用算子汇总-公式和输入输出","link":"#_9-pytorch的通用算子汇总-公式和输入输出","children":[]}],"git":{"createdTime":1729058540000,"updatedTime":1729058540000,"contributors":[{"name":"unknown","email":"15721607377@163.com","commits":1}]},"readingTime":{"minutes":5.04,"words":1511},"filePathRelative":"zh/posts/LLM/llama_advanced.md","localizedDate":"2024年6月1日","excerpt":"<h1> Llama进阶</h1>\\n<ul>\\n<li>\\n<ol>\\n<li>LayerNorm(Layer Normalization，层归一化)</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"2\\">\\n<li>Attention</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"3\\">\\n<li>超参数</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"4\\">\\n<li>张量维度转换</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"5\\">\\n<li>可训练参数量</li>\\n</ol>\\n</li>\\n<li>\\n<ol start=\\"6\\">\\n<li>源码</li>\\n</ol>\\n</li>\\n</ul>\\n","autoDesc":true}');export{e as data};
