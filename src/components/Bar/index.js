import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'

function Bar({title, xData, yData, style}) {
  const domRef = useRef()

  const chartInit = () => {
    const myChart = echarts.init(domRef.current)
    myChart.setOption({
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: xData
      },
      yAxis: {},
      series: [
        {
          name: 'number',
          type: 'bar',
          data: yData
        }
      ]
    })
  }
  //执行初始化函数
  useEffect(() => {
    chartInit()
  }, [])
  return (
    <div>
      {/* 准备一个挂载节点 */}
      <div ref={domRef} style={style}></div>
    </div>
  )
}

export default Bar