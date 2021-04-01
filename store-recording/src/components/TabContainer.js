import React from 'react';
import Tabs, { Tab, Handle, Content } from './tabs';

function App() {
    return (
        <Tabs>
            <Tab id="tab-1">
                <Handle>Tab 1</Handle>
                <Content>
                    <h1>Some heading here</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Autem doloremque, nesciunt atque labore qui, enim
                        corrupti quos illum veniam minus ipsam earum dicta
                        dolore maxime esse distinctio eaque tempora in!
                    </p>

                    <img src="/logo192.png" alt="" />
                </Content>
            </Tab>

            <Tab id="tab-2">
                <Handle>Tab 2</Handle>
                <Content>
                    <h1>This is a totally different tab dude!</h1>
                    <p>
                        Reiciendis saepe dicta quis nihil porro eius minima amet
                        similique illum nobis ea ipsa, laudantium placeat sequi
                        deleniti maxime vitae voluptatibus velit! Lorem ipsum
                        dolor sit amet consectetur adipisicing elit.
                    </p>
                </Content>
            </Tab>

            <Tab id="tab-3">
                <Handle>Tab 3</Handle>
                <Content>
                    <h1>That is the final tab man</h1>
                    <img src="/logo512.png" alt="" />
                </Content>
            </Tab>
        </Tabs>
    );
}

export default App;
