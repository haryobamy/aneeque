import React from 'react'
import { IncomeTitle, IncomeWrapper, PaperWrapper } from './OverviewPageElement'
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    BarSeries,
    Tooltip,
    ArgumentAxis,
    ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker, HoverState, SelectionState } from '@devexpress/dx-react-chart';
import * as d3Format from 'd3-format';


const data = [

    { month: 'Jan', income: 3013 },
    { month: 'feb', income: 3682 },
    { month: 'Mar', income: 4440 },
    { month: 'Apr', income: 5310 },
    { month: 'May', income: 6127 },
    { month: 'Jun', income: 6930 },
    { month: 'Jul', income: 6930 },
    { month: 'Aug', income: 630 },
    { month: 'Sep', income: 690 },
    { month: 'Oct', income: 930 },
    { month: 'Nov', income: 6300 },
    { month: 'Dec', income: 4230 },
    // {
    //     year: 2020,
    //     month: {'Jan', 'Feb', 'Mar'
    //         // { month: 'Jan', income: 3013 },
    //         // { month: 'feb', income: 3682 },
    //         // { month: 'Mar', income: 4440 },
    //         // { month: 'Apr', income: 5310 },
    //         // { month: 'May', income: 6127 },
    //         // { month: 'Jun', income: 6930 },
    //         // { month: 'Jul', income: 6930 },
    //         // { month: 'Aug', income: 630 },
    //         // { month: 'Sep', income: 690 },
    //         // { month: 'Oct', income: 930 },
    //         // { month: 'Nov', income: 6300 },
    //         // { month: 'Dec', income: 4230 },
    // ]
    // },




];

const Barchart = () => {
    const [chartData, setChartData] = React.useState(data)
    const [hover, setHover] = React.useState(null)

    const [selection, setSelection] = React.useState([{ series: 'May', income: 6127 }])
    const [tooltipTarget, setTooltipTarget] = React.useState(null)

    const handleHover = (hover) => {

        setHover(hover);
    }

    const compare = (
        { series, income }, { series: targetSeries, income: targetincome },
    ) => series === targetSeries && income === targetincome;

    const changeTooltip = (targetItem) => {
        setTooltipTarget({ tooltipTarget: targetItem })
    }




    // const handleSelect = (targets) => {
    //     const target = targets[0];
    //     if (target) {
    //         setSelection((selection) => ({
    //             selection: selection[0] && compare(selection[0], target) ? [] : [target],
    //         }));
    //     }
    // };



    const Barstyle = {
        width: 20,
        borderRadius: '100%',
        // height: 20,
    }
    const hoverstyle = {
        color: '#347ae2'
    }

    const tooltipContentTitleStyle = {
        fontWeight: 'bold',
        paddingBottom: 0,
    };
    const tooltipContentBodyStyle = {
        paddingTop: 0,
    };
    const formatTooltip = d3Format.format(',.2r');

    const TooltipContent = (props) => {
        const { targetItem, text, ...restProps } = props;
        return (
            <div>
                <div>
                    <Tooltip.Content
                        {...restProps}
                        style={tooltipContentTitleStyle}
                        text={targetItem.series}
                    />
                </div>
                <div>
                    <Tooltip.Content
                        {...restProps}
                        style={tooltipContentBodyStyle}
                        text={formatTooltip(data[targetItem.income][targetItem.series])}
                    />
                </div>
            </div>
        );
    };


    return (
        <Paper style={{ margin: '0px 15px', height: 240 }}>
            <Chart
                data={chartData}

                height={240}

            >
                {/* <ArgumentAxis /> */}
                <ValueAxis max={4} showLine={false} showGrid={false} />
                <ArgumentAxis max={12} showLine={false} />

                <BarSeries

                    valueField="income"
                    argumentField="month"
                    color='#347ae2'
                    style={Barstyle}
                />

                <EventTracker />
                <HoverState hover={hover} onHoverChange={handleHover} style={hoverstyle} color='#e2e8fd' />
                <SelectionState selection={selection} />
                {/* <Tooltip
                    targetItem={tooltipTarget}
                    onTargetItemChange={changeTooltip}
                    contentComponent={TooltipContent}
                /> */}
                <Animation />
            </Chart>
        </Paper>
    );
}



const Income = () => {
    return (
        <>
            <IncomeWrapper>
                <IncomeTitle>
                    <div className='d-flex'>
                        <h6>Income</h6>
                        <h6 style={{
                            color: "#8a99b9"
                        }}>Expense</h6>

                    </div>

                    <select>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                    </select>
                </IncomeTitle>
                <Barchart />
            </IncomeWrapper>
        </>
    )
}

export default Income
