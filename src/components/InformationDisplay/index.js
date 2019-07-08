import React, {Component} from 'react' ;
import {
    List,
    Card
} from 'antd' ;

import ComponentWrapper from './style' ;

const Meta = {Card} ;

const GridProps = {
    grid : {
        gutter : 24,
        xs : 1,
        sm : 2,
        md : 3,
        lg : 4,
        xl : 6,
        xxl : 3
    },
    renderItem : item => (
        <List.Item>
            <Card
                title={item.title}
                cover={
                    <img
                        width={272}
                        alt="Loading"
                        src={item.urlToImage}
                    />
                }
                hoverable
            >
                <Meta
                    description={item.description}
                />

                <br/>

                <Meta
                    description={`Upload by ${item.uploadDay}`}
                />

            </Card>
        </List.Item>
    )
}

const ListProps = {
    itemLayout : "vertical",
    size : "large",
    renderItem : item => (
        <List.Item
            key={item.title}
            extra={
                <img
                    width={272}
                    alt="logo"
                    src={item.urlToImage}
                />
            }
        >

        <List.Item.Meta
            title={(<a href={item.url}> {item.title} </a>)}
            description={item.description}
        />

        </List.Item>
    )
}

const RenderList = (props) => {
    return (
        <List
            dataSource={props.data}
            renderItem={item => (
                <List.Item>
                    <Card
                        title={item.title}
                        cover={
                            <img
                                width={272}
                                alt="Loading"
                                src={item.urlToImage}
                            />
                        }
                        hoverable
                    >
                        <Meta
                            description={item.description}
                        />

                        <br/>

                        <Meta
                            description={`Upload by ${item.uploadDay}`}
                        />

                    </Card>
                </List.Item>)
            }
        />
    )
} 

class InfomationDisplay extends Component {
    constructor(props) {
        super(props) ;
    }

    render () {
        console.log(this.props.data) ;
        return (
            <ComponentWrapper>
                {
                    this.props.fetchComplete && this.props.data !== null
                    ? <RenderList data={this.props.data}/>
                    : (
                        <List loading={true}>
                            <List.Item ></List.Item>
                        </List>
                    )
                }
            </ComponentWrapper>
        )
    }
} 

export default InfomationDisplay ;