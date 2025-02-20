import React from "react";
import "./App.css";
import Greet from "./components/1.Props.tsx";
import PropsObj from "./components/2.PropsObj.tsx";
import PropsArray from "./components/3.PropsArray.tsx";
import PropsDynamicStatusType from "./components/4.PropsDynamicStatusType.tsx";
import ChildrenPropsToReactCompo from "./components/5.ChildrenPropsToReactCompo.tsx";
import ChildrenProp from "./components/6.ChildrenProp.tsx";
import ButtonEventProp from "./components/7.ButtonEventProp.tsx";
import EventPassing from "./components/8.EventPassing.tsx";
import OnChangeEvent from "./components/9.OnChangeEvent.tsx";
import StyleProps from "./components/10.StyleProps.tsx";
import UseStateCom from "./components/12.UseState.tsx";
import UseStaDynamic from "./components/13.UseStaDynamic.tsx";
import UseReducerHook from "./components/15.UseReducerHook.tsx";
import { ThemeContextProvider } from "./components/16.UseContextHook.tsx";
import Box from "./components/16.v2Box.tsx";
import { UserContextProvider } from "./components/17.v1useContext.tsx";
import UseContextHookDyna from "./components/17.UseContextHookDyna.tsx";
import UseRefHook from "./components/18.UseRefHook.tsx";
import UseRefMutable from "./components/18.v1useRefMutable.tsx";
import ComponentProp from "./components/19.ComponentProp.tsx";
import Profile from "./components/19.v2profile.tsx";
import GenericProps from "./components/20.GenericProps.tsx";
import RestrictingProps from "./components/21.RestrictingProps.tsx";
import TemperalLiteral from "./components/22.TemperalLiteral.tsx";
import HtmlProp from "./components/23.HtmlPropButton.tsx";

function App() {
  //passing this obj to 2.PropsObj.tsx
  const personName = {
    firstName: "Ansa",
    lastName: "Ali",
  };

  //passing taary to component
  const personArray = [
    {
      first: "Ansa",
      last: "ali",
    },
    {
      first: "Second",
      last: "name",
    },
    {
      first: "Third",
      last: "name",
    },
  ];

  return (
    <div className="App">
      <h1> Typescript in React</h1>
      <ul>
        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
          }}
        >
          Passing props from App to 1.Props.tsx
          <Greet name="This is from App" page={32} isLoggedIn={false} />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Passing object props from App to 2.PropsObj.tsx
          <PropsObj name={personName} />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Passing array props from App
          <PropsArray arrayName={personArray} />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Passing dynamic status type
          <p> 1.loading status</p>
          <PropsDynamicStatusType status="loading" />
          <p> 2.pending status</p>
          <PropsDynamicStatusType status="pending" />
          <p> 3.cancel status</p>
          <PropsDynamicStatusType status="cancel" />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Passing a child (text between a) component
          <ChildrenPropsToReactCompo>
            Wraping this in between opening and closing tag
          </ChildrenPropsToReactCompo>
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          If child is in another react component
          <p>
            instead of above text (Wraping..) ue the above component as childrem
            props
          </p>
          <ChildrenProp>
            <ChildrenPropsToReactCompo>
              Between the react component
            </ChildrenPropsToReactCompo>
          </ChildrenProp>
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Button event prop
          <ButtonEventProp handleButton={() => console.log("Button clicked")}>
            First button
          </ButtonEventProp>
          <ButtonEventProp
            handleButton={() => console.log("Second button clicked")}
          >
            Second Button
          </ButtonEventProp>
          <ButtonEventProp
            handleButton={() => console.log("default button txt")}
          />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Passing event
          <EventPassing handleEvent={(event) => console.log("Button", event)} />
          <EventPassing
            handleEvent={(event, id) => console.log("Button", event, id)}
          />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          OnChange event
          <OnChangeEvent
            value="aa"
            handleOnChnage={(event) => console.log("changing", event)}
          />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          OnChange event
          <StyleProps style={{ border: "1px solid red" }} />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          OnChange event
          <UseStateCom />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Use Stae
          <UseStaDynamic />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Usereducer Hook
          <UseReducerHook />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          UseContext Hook, add static value
          <ThemeContextProvider>
            <Box />
          </ThemeContextProvider>
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          UseContext Hook, with dynamic value
          <UserContextProvider>
            <UseContextHookDyna />
          </UserContextProvider>
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          UseRef Hook
          <UseRefHook />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Mutable UseRef Hook
          <UseRefMutable />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Component props
          <ComponentProp isLoggedIn={true} component={Profile} />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Generic props string
          <GenericProps
            items={["a", "b", "c"]}
            onClick={(item) => console.log(item)}
          />
          Generic props numbers
          <GenericProps
            items={[1, 2, 3]}
            onClick={(item) => console.log(item)}
          />
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
         Restricted this.props
         {/* <RestrictingProps value={20} isNegative isPositive isZero/> //we can do like this, which is not a proper way. sO USER RESTRICTED PROPS */}
         <RestrictingProps value={20} isPositive/>
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Position Toast
          <TemperalLiteral position='center'/>
        </li>

        <li
          style={{
            backgroundColor: "#001f3f",
            color: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          Wrapping HTML elements
          <HtmlProp varient='primary' onClick={()=> console.log('clicked')}>
            Children Button 
          </HtmlProp>
        </li>
      </ul>
    </div>
  );
}

export default App;
