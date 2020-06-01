## 兼容性
ie 不支持
chrome 57+

## 注意

1. 项目只能是容器的顶层子元素，不包含项目的子元素。Grid 布局只对项目生效。
2. 属性可去掉grid-

## 容器属性

```
div {
  display: grid;
}
```

### grid-template-columns 列宽

定义每一列的列宽( px \ % \ repeat \ fr \ minmax \ auto )

1. repeat 重复
2. fr 比例
3. minmax 长度范围: 表示长度就在这个范围之中。两个参数，最小值和最大值。
4. auto 浏览器决定


```
grid-template-columns: 100px 1fr 2fr;
grid-template-columns: repeat(3, 33.33%);
grid-template-columns: repeat(auto-fill,100px);
grid-template-columns: minmax(100px, 1fr); // 表示列宽不小于100px，不大于1fr。
```
### grid-template-rows  行高

定义每一行的行高

### grid-gap 间距
1. grid-column-gap 列间距
2. grid-row-gap 行间距