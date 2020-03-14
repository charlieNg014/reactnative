import React, { useState } from 'react';
import { Container, Header, Content, ListItem, Text, Icon, Left, Body, Right, Switch, Row, List, Separator } from 'native-base';
import {ScrollView, StyleSheet, View, Image} from "react-native"
import {Button} from "../../../components"

export default function Logout () {
  let [noti, setNoti] = useState(true);
    return (
    <ScrollView>
      <Container style ={{paddingTop:0}}>
        <Content>
          <Separator bordered>
          </Separator>
          <ListItem last style = {{marginTop: 5, height: 60}}>
            <Body style = {{
                flexDirection: "row", 
                justifyContent: "flex-start",
                marginTop: -8
              }}>
              <View style = {{paddingRight: 10}}>
                <Button style = {{backgroundColor: "transparent", marginLeft: -5}}>
                  <Image source = {require("../../../assets/bake/profile.jpg")} style = {{backgroundColor: "lightblue", width: 50, height: 50, borderRadius: 100}}/>
                </Button>
              </View>
              <View>
                <Text style = {{marginLeft: 5, marginTop: 13, fontWeight: "bold"}}>Charlie Nguyen</Text>
                <Text style = {{marginLeft: 5, marginTop: 0, fontSize: 12}}>View your profile</Text>
              </View>
            </Body>
          </ListItem>      
          <Separator bordered>
          </Separator>
          
          {/* first block */}
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: "transparent", height: 30, width: 28, marginLeft: -5 }}>
                  <Icon active name="notifications" style = {{paddingLeft: 5, color: "orange"}}/>
                </Button>
              </Left>
              <Body>
                <Text>Notification</Text>
              </Body>
              <Right>
                <Switch value = {noti} onValueChange = {() =>{
                  if (noti === true) {
                    setNoti(false)
                  } else {
                    setNoti(true)
                  }
                } }/>
              </Right>
            </ListItem>
            <ListItem icon last>
                <Left>
                  <Button style={{ backgroundColor: "transparent", height: 30, width: 28, marginLeft: -5}}>
                    <Icon active name="ribbon" style = {{paddingLeft: 5,  color: "blue"}} />
                  </Button>
                </Left>
                <Body>
                  <Text>Credits & Coupon</Text>
                </Body>
                <Right> 
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
          
          {/* third block */}
            <Separator bordered>
            </Separator>
            <ListItem icon>
                <Left>
                  <Button  style={{ backgroundColor: "transparent", height: 30, width: 30, marginLeft: -5  }}>
                    <Icon active name="mail-unread" style = {{marginLeft: 2, color: "lightgreen"}} />
                  </Button>
                </Left>
                <Body>
                  <Text>Give us feedback</Text>
                </Body>
                <Right>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
            <ListItem icon last>
                <Left>
                  <Button style={{ backgroundColor: "transparent", height: 30, width: 25, marginLeft: -3 }}>
                    <Icon active name="book" style = {{paddingLeft: 2}} />
                  </Button>
                </Left>
                <Body>
                  <Text>History</Text>
                </Body>
                <Right>
                  <Icon active name="arrow-forward" />
                </Right>
              </ListItem>
            <Separator bordered>
            </Separator>

            <Separator bordered style ={styles.bottom}>
              <View style = {{paddingRight: 10, marginTop: -7}}>
                  <Icon active name="cog" />
              </View>
              {/* <View> */}
                  <Button style ={{backgroundColor: "transparent", marginTop: -15, width: 300}}>
                      <Text style = {{fontSize: 20, marginLeft: 15}}>
                        Settings
                      </Text>
                  </Button>
              {/* </View> */}
            </Separator>
            <Separator bordered style ={styles.bottom}>
              <View style = {{paddingRight: 10, marginTop: -7, marginLeft: 2}}>
                  <Icon active name="lock" />
              </View>
              {/* <View> */}
                  <Button style ={{backgroundColor: "transparent", marginTop: -15, width: 300}}>
                      <Text style = {{fontSize: 20, marginLeft: 20}}>
                        Privacy
                      </Text>
                  </Button>
              {/* </View> */}
            </Separator>
            <Separator bordered style ={styles.bottom}>
              <View style = {{paddingRight: 10, marginTop: -7}}>
                  <Icon active name="log-out" />
              </View>
              {/* <View> */}
                  <Button style ={{backgroundColor: "transparent", marginTop: -15, width: 300}}>
                      <Text style = {{fontSize: 20, marginLeft: 15}}>
                        Logout
                      </Text>
                  </Button>
              {/* </View> */}
            </Separator>
        </Content>
      </Container>
    </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    image2: {
      backgroundColor: "lightblue",
      height: 150,
      alignItems: "center",
      width: "100%"
  },
  bottom: {
    flexDirection: "row", 
    justifyContent: "flex-start",
    height: 45
  }
})