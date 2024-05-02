'use client'
import Wrapper from "@/components/utils/wrapper";
import styled from "styled-components";

const Logo = styled.div`
  width: 100px;
  padding: 24px;
  font-size: var(--font-size-logo);
`

const TopRow = styled.div`
  width: 100%;
  height: 32px;
  display: flex;
  justify-content: space-between;
  border: 1px solid var(--light-grey);
  box-sizing: border-box;
`

const MiddleRow = styled.div`
  width: 100%;
`

const EditionSelector = styled.div`
  width: 200px;
  height: 32px;
  display: flex;
  padding-left: var(--padding);
  align-items: center;
  font-size: var(--font-size-small);
  text-transform: uppercase;
  border-right: 1px solid var(--light-grey);
`

const RightSection = styled.section`
  width: 400px;
  height: 32px;
  display: flex;
`

const SubscriptionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 32px;
  text-transform: uppercase;
  font-size: var(--font-size-small);
  color: var(--white);
  background: var(--dark-cyan);
`

const LogInOrRegister = styled.div`
  width: 140px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: var(--font-size-small);
  border-left: 1px solid var(--light-grey);
`

const NavigationRow = styled.nav`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--light-grey);
`

const TopicButton = styled.button`
  padding: var(--padding) var(--padding-medium);
  font-size: var(--font-size-small);
  text-transform: uppercase;
  position: relative;

  &:hover {
    background: var(--faint-grey);
    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--red);
      content: '';
    }
    ul {
      display: block;
    }
  }
`

const TopicDropdown = styled.ul`
  background: var(--white);
  display: none;
  position: absolute;
  box-sizing: border-box;
  left: -1px;
  top: 100%;
  border: 1px solid var(--light-grey);
`

const TopicDropdownItem = styled.li`
  display: flex;
  width: 200px;
  align-items: center;
  padding: 10px 12px 10px 20px;
  background: var(--white);
  color: #222;
  font-size: 16px;
  font-weight: normal;
  &:hover {
    background: var(--grey);
    color: var(--white);
  }
`

// const Topic = ({ value }) => {
//     const
//
//
//     return
// }

const TopicButtonPremium = styled(TopicButton)`
  &:hover {
    background: var(--faint-cyan);
    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--dark-cyan);
      content: '';
    }
  }
`

const TopicsSection = styled.section`
`

export default function Home() {
  return (
    <Wrapper>
        <TopRow>
            <EditionSelector>
                UK Edition
            </EditionSelector>
            <RightSection>
                <SubscriptionButton>
                    Subscribe: £6 for 6 months
                </SubscriptionButton>
                <LogInOrRegister>
                    Log in / Register
                </LogInOrRegister>
            </RightSection>
        </TopRow>
        <MiddleRow>
            <Logo>Maverick</Logo>
        </MiddleRow>
        <NavigationRow>
            <TopicsSection>
                <TopicButton>News
                    <TopicDropdown>
                        <TopicDropdownItem>1</TopicDropdownItem>
                        <TopicDropdownItem>2</TopicDropdownItem>
                        <TopicDropdownItem>3</TopicDropdownItem>
                    </TopicDropdown>
                </TopicButton>
                <TopicButton>Sport</TopicButton>
                <TopicButton>Voices</TopicButton>
                <TopicButtonPremium>Premium</TopicButtonPremium>
            </TopicsSection>
        </NavigationRow>
    </Wrapper>
  );
}
