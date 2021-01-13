import React from "react";
import {Container} from "semantic-ui-react";
import Example from "./Card";
import {Icon ,Grid,Image } from 'semantic-ui-react';
import './App.css';
const extra =( <a>
  <Icon name='user' />
  {Math.floor(Math.random() * Math.floor(255))} Friends
  </a>);


const data =[ 
{name:'ali' ,
img:'https://picsum.photos/200?random=1',
meta:'student',
desc:'Ali is SW Student',
},
{name:'Tal' ,
img:'https://picsum.photos/200?random=2',
meta:'Lecturer',
desc:'Tal is React Developer',
},
{name:'Tamar' ,
img:'https://picsum.photos/200?random=3',
meta:'Lecturer',
desc:'Tamar is Backlog Manager',
},
{name:'Sam' ,
img:'https://picsum.photos/200?random=4',
meta:'friend',
desc:'Sam is QA Tester',
},
{name:'Yossi' ,
img:'https://picsum.photos/200?random=5',
meta:'friend',
desc:'Sam is QA Tester',
},
{name:'Adam' ,
img:'https://picsum.photos/200?random=6',
meta:'friend',
desc:'Sam is QA Tester',
},
];


const App = () => (
  <div 
  style={{
    backgroundColor: "#" + ((1<<24)*Math.random() | 0).toString(16),
  }}>
  <Container  style={{
    backgroundColor: "#" + ((1<<24)*Math.random() | 0).toString(16),
  }}>
  <Grid columns={3} divided>
  <Grid.Row>
    <Grid.Column>
    <Example 
img={data[0]['img']} 
name={data[0]['name']}
meta={data[0]['meta']}
desc={data[0]['desc']}
extra={extra}
/>
    </Grid.Column>
    <Grid.Column>
     
<Example 
img={data[1]['img']} 
name={data[1]['name']}
meta={data[1]['meta']}
desc={data[1]['desc']}
extra={extra}
/>

    </Grid.Column>
    <Grid.Column>

    <Example 
img={data[2]['img']} 
name={data[2]['name']}
meta={data[2]['meta']}
desc={data[2]['desc']}
extra={extra}
/>
    </Grid.Column>

    <Grid.Row>
    <Grid.Column>
    </Grid.Column>
    </Grid.Row>


    <Grid.Column>


    <Example 
img={data[3]['img']} 
name={data[3]['name']}
meta={data[3]['meta']}
desc={data[3]['desc']}
extra={extra}
/>
</Grid.Column>
<Grid.Column>


<Example 
img={data[4]['img']} 
name={data[4]['name']}
meta={data[4]['meta']}
desc={data[4]['desc']}
extra={extra}
/>
</Grid.Column>
<Grid.Column>


<Example 
img={data[5]['img']} 
name={data[5]['name']}
meta={data[5]['meta']}
desc={data[5]['desc']}
extra={extra}
/>
</Grid.Column>
  </Grid.Row>
  </Grid>
  </Container>
  </div>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);



export default App;


 
