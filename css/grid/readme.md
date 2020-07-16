## 兼容性
> ie 不支持  
> chrome 57+

## 注意

> 项目只能是容器的顶层子元素，不包含项目的子元素。Grid 布局只对项目生效。

## 容器属性

```
div {
  display: grid;
}
```

### grid-template-columns

> 列宽。定义每一列的列宽( px \ % \ repeat \ fr \ minmax \ auto )

- repeat 重复
- auto-fill 自动填充
- fr 比例
- minmax 长度范围: 表示长度就在这个范围之中。两个参数，最小值和最大值。
- auto 浏览器决定


```
grid-template-columns: 
 100px 1fr 2fr;
 repeat(3, 33.33%);
 repeat(auto-fill,100px); // 数量不固定，自动填充
 minmax(100px, 1fr); // 表示列宽不小于100px，不大于1fr。
 100px auto 100px;
```

### grid-template-rows 

> 行高。定义每一行的行高

### (grid-)gap 

> 间距
> grid-column-gap 列间距
> grid-row-gap 行间距
> 这三个属性可去掉 **grid-**

### grid-template-areas 

> 指定区域。某些区域不需要利用，用"点"（.）表示

```
grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';                     
grid-template-areas: 'a a a' // 合并一个区域  
                     'b b b'
                     'c c c';
grid-template-areas: "header header header"
                     "main main sidebar"
                     "footer footer footer";
grid-template-areas: 'a . c' // 该单元格不属于任何区域。
                     'd . f'
                     'g . i';
```

### grid-auto-flow 

> 放置顺序。
> row(默认)/column/row dense/column dense
> row dense/column dense 不留空格尽量填充，可能不是按照书写顺序显示

### place-items 

> 单元格位置：`place-items: <align-items> <justify-items>`;  
> justify-items 单元格内容的水平位置（左中右）  
> align-items 单元格内容的垂直位置（上中下）。  
> start | end | center | stretch | space-around | space-between | space-evenly;  

### place-content 

> 整个内容区域在容器中的位置：`place-items: <align-content> <justify-content>`;
> justify-content 整个内容区域在容器里面的水平位置（左中右）
> align-content 整个内容区域的垂直位置（上中下）

### grid-auto-columns 
grid-auto-rows 属性