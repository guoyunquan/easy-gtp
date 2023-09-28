<template>
  <div>
    <markdown-renderer :markdownString="markdownString" />
  </div>
</template>

<script>
import MarkdownRenderer from './ww'; // 替换为实际路径

export default {
  components: {
    MarkdownRenderer
  },
  data() {
    return {
      markdownString: "递归算法是一种在问题解决过程中调用自身来解决子问题的方法。下面是一个简单的递归算法示例，用于计算一个数的阶乘：\n\n1. 首先定义一个函数，接受一个整数参数n。\n2. 在函数体内，设置递归终止条件。当n等于0或1时，直接返回1。\n3. 在函数体内，调用自身，传入n-1作为参数，将返回值保存为factorial，以计算n的阶乘。\n4. 返回factorial与n相乘的结果。\n\n这样，每次调用函数时，都会递归地调用自身，直到满足递归终止条件，然后将最终结果返回。以下是这个阶乘递归算法的Python代码实现：\n\n```python\ndef factorial(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return n * factorial(n-1)\n```\n\n这个算法的时间复杂度为O(n)，其中n是输入的整数。"
    };
  }
};
</script>
