var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "lu-decomposition",
  "level": "1",
  "url": "lu-decomposition.html",
  "type": "Section",
  "number": "1.1",
  "title": "LU分解",
  "body": " LU分解  LU分解将给定的方阵表示为一个下三角矩阵 与一个上三角矩阵 的乘积。这种分解广泛用于解线性方程组、矩阵求逆以及行列式的计算。   LU分解的存在性   设 是一个方阵。如果可以通过置换使 的所有主子式非零，那么 存在LU分解。    考虑一个方阵 ，目标是将 表示为 ，其中 是下三角矩阵， 是上三角矩阵。证明步骤如下：    通过高斯消元法将矩阵 化为上三角形式。每一步消元操作可以用一个下三角矩阵 表示。    将这些消元操作的逆矩阵组合成一个下三角矩阵 ，使得 ，其中 为上三角矩阵。    整理得出 。如果需要部分选主元，引入一个置换矩阵 ，使得 。       对矩阵 执行LU分解。L为单位下三角，U为上三角 第一步：  第二步： 此时： 第三步： 此时：    矩阵 的分解结果为： 。    坐标轴上的 LU 分解   通过坐标轴上的向量展示 LU 分解        矩阵 LU 分解图示   矩阵 A 的 LU 分解示意图       "
},
{
  "id": "existence-lu",
  "level": "2",
  "url": "lu-decomposition.html#existence-lu",
  "type": "Theorem",
  "number": "1.1.1",
  "title": "LU分解的存在性.",
  "body": " LU分解的存在性   设 是一个方阵。如果可以通过置换使 的所有主子式非零，那么 存在LU分解。    考虑一个方阵 ，目标是将 表示为 ，其中 是下三角矩阵， 是上三角矩阵。证明步骤如下：    通过高斯消元法将矩阵 化为上三角形式。每一步消元操作可以用一个下三角矩阵 表示。    将这些消元操作的逆矩阵组合成一个下三角矩阵 ，使得 ，其中 为上三角矩阵。    整理得出 。如果需要部分选主元，引入一个置换矩阵 ，使得 。     "
},
{
  "id": "lu-example",
  "level": "2",
  "url": "lu-decomposition.html#lu-example",
  "type": "Checkpoint",
  "number": "1.1.2",
  "title": "",
  "body": " 对矩阵 执行LU分解。L为单位下三角，U为上三角 第一步：  第二步： 此时： 第三步： 此时：    矩阵 的分解结果为： 。  "
},
{
  "id": "fig-lu-decomposition-vectors",
  "level": "2",
  "url": "lu-decomposition.html#fig-lu-decomposition-vectors",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " 通过坐标轴上的向量展示 LU 分解     "
},
{
  "id": "fig-lu-decomposition-example",
  "level": "2",
  "url": "lu-decomposition.html#fig-lu-decomposition-example",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " 矩阵 A 的 LU 分解示意图     "
},
{
  "id": "ldv-decomposition",
  "level": "1",
  "url": "ldv-decomposition.html",
  "type": "Section",
  "number": "1.2",
  "title": "LDV分解",
  "body": " LDV分解  LDV分解通过引入一个对角缩放矩阵 ，推广了LU分解，使得 ，其中 和 分别是下三角矩阵和上三角矩阵。   LDV分解的存在性   任何非奇异的方阵 都可以分解为 ，其中 是对角线为1的下三角矩阵， 是对角矩阵， 是对角线为1的上三角矩阵。    设 是一个非奇异矩阵，其构造方法如下：     是下三角矩阵，包含了特征值的平方根     是对角矩阵，包含了特征值     是矩阵的特征向量矩阵        考虑矩阵 。求其 LDV 分解。 步骤 1: 确定矩阵 的特征值和特征向量  LDV 分解的目的是将矩阵 ，其中：   是下三角矩阵，包含了特征值的平方根；  是对角矩阵，包含了特征值；  是矩阵的特征向量矩阵。   首先，我们需要求解矩阵 的特征值和特征向量。  求特征值：   其中， 是单位矩阵， 。  计算行列式：   解这个二次方程：   这给出了两个特征值：   求特征向量：  接下来，我们通过代入特征值来求特征向量。对于每一个特征值，解线性方程 来得到对应的特征向量 。  步骤 2: 计算矩阵 , , 和   在 LDV 分解中：  是单位下三角矩阵，包含了特征值的平方根；  是对角矩阵，包含了特征值；  是特征向量矩阵。    根据特征值和特征向量的结果，我们得到如下矩阵： ， ， 。  步骤 3: 验证分解  最后，我们验证是否满足 。计算右侧的矩阵乘法，检查其是否与原矩阵 相等。如果相等，则分解正确。     经过分解，我们得到： ， ， 。     LDV分解   LDV分解        矩阵 LDV 分解图示   Visualization of LDV decomposition for matrix \\(A\\)       "
},
{
  "id": "existence-ldv",
  "level": "2",
  "url": "ldv-decomposition.html#existence-ldv",
  "type": "Theorem",
  "number": "1.2.1",
  "title": "LDV分解的存在性.",
  "body": " LDV分解的存在性   任何非奇异的方阵 都可以分解为 ，其中 是对角线为1的下三角矩阵， 是对角矩阵， 是对角线为1的上三角矩阵。    设 是一个非奇异矩阵，其构造方法如下：     是下三角矩阵，包含了特征值的平方根     是对角矩阵，包含了特征值     是矩阵的特征向量矩阵     "
},
{
  "id": "ldv-example",
  "level": "2",
  "url": "ldv-decomposition.html#ldv-example",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": "  考虑矩阵 。求其 LDV 分解。 步骤 1: 确定矩阵 的特征值和特征向量  LDV 分解的目的是将矩阵 ，其中：   是下三角矩阵，包含了特征值的平方根；  是对角矩阵，包含了特征值；  是矩阵的特征向量矩阵。   首先，我们需要求解矩阵 的特征值和特征向量。  求特征值：   其中， 是单位矩阵， 。  计算行列式：   解这个二次方程：   这给出了两个特征值：   求特征向量：  接下来，我们通过代入特征值来求特征向量。对于每一个特征值，解线性方程 来得到对应的特征向量 。  步骤 2: 计算矩阵 , , 和   在 LDV 分解中：  是单位下三角矩阵，包含了特征值的平方根；  是对角矩阵，包含了特征值；  是特征向量矩阵。    根据特征值和特征向量的结果，我们得到如下矩阵： ， ， 。  步骤 3: 验证分解  最后，我们验证是否满足 。计算右侧的矩阵乘法，检查其是否与原矩阵 相等。如果相等，则分解正确。     经过分解，我们得到： ， ， 。   "
},
{
  "id": "fig-ldv-decomposition-vectors",
  "level": "2",
  "url": "ldv-decomposition.html#fig-ldv-decomposition-vectors",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " LDV分解     "
},
{
  "id": "fig-ldv-decomposition",
  "level": "2",
  "url": "ldv-decomposition.html#fig-ldv-decomposition",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Visualization of LDV decomposition for matrix \\(A\\)     "
},
{
  "id": "full-rank-decomposition",
  "level": "1",
  "url": "full-rank-decomposition.html",
  "type": "Section",
  "number": "1.3",
  "title": "满秩分解",
  "body": " 满秩分解  对于一个秩为 的矩阵 ，满秩分解将 表示为两个矩阵的乘积： ，其中 具有满列秩， 具有满行秩。   满秩分解的存在性   任意秩为 的矩阵 都可以分解为 ，其中 ， 。    构造满秩分解的方法如下：    对矩阵 进行列变换，提取其列空间的基，从而形成 。    对化简后的矩阵进行行变换，提取其行空间的基，从而形成 。    构造出的矩阵 和 满足 。     求矩阵 的满秩分解。 步骤 1: 确定矩阵的秩  观察矩阵 ，我们可以发现第二行是第一行的 3 倍。因此，矩阵的秩为 1。  步骤 2: 求解满秩分解 由于矩阵秩为 1，我们可以通过提取矩阵中的非零列向量来进行满秩分解。我们选取矩阵的第一列作为向量 ，并且选取矩阵的第一行作为向量 。  步骤 3: 构造满秩分解 根据以上选择，矩阵的满秩分解为：   其中， 和 。   验证：将 和 相乘，我们得到： 这与原矩阵 相等，因此分解正确。    满秩分解   Visualizing full-rank decomposition with vectors on coordinate axes        Full-Rank Decomposition   A矩阵满秩分解       "
},
{
  "id": "existence-full-rank",
  "level": "2",
  "url": "full-rank-decomposition.html#existence-full-rank",
  "type": "Theorem",
  "number": "1.3.1",
  "title": "满秩分解的存在性.",
  "body": " 满秩分解的存在性   任意秩为 的矩阵 都可以分解为 ，其中 ， 。    构造满秩分解的方法如下：    对矩阵 进行列变换，提取其列空间的基，从而形成 。    对化简后的矩阵进行行变换，提取其行空间的基，从而形成 。    构造出的矩阵 和 满足 。   "
},
{
  "id": "full-rank-example",
  "level": "2",
  "url": "full-rank-decomposition.html#full-rank-example",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "",
  "body": " 求矩阵 的满秩分解。 步骤 1: 确定矩阵的秩  观察矩阵 ，我们可以发现第二行是第一行的 3 倍。因此，矩阵的秩为 1。  步骤 2: 求解满秩分解 由于矩阵秩为 1，我们可以通过提取矩阵中的非零列向量来进行满秩分解。我们选取矩阵的第一列作为向量 ，并且选取矩阵的第一行作为向量 。  步骤 3: 构造满秩分解 根据以上选择，矩阵的满秩分解为：   其中， 和 。   验证：将 和 相乘，我们得到： 这与原矩阵 相等，因此分解正确。  "
},
{
  "id": "fig-full-rank-decomposition-vectors",
  "level": "2",
  "url": "full-rank-decomposition.html#fig-full-rank-decomposition-vectors",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": " Visualizing full-rank decomposition with vectors on coordinate axes     "
},
{
  "id": "fig-full-rank-decomposition",
  "level": "2",
  "url": "full-rank-decomposition.html#fig-full-rank-decomposition",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": " A矩阵满秩分解     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
