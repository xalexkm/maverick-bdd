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
  box-sizing: content-box;
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
  display: flex;
`

const TopicButton = styled.button`
  padding: var(--padding);
  font-size: var(--font-size-small);
  text-transform: uppercase;
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
            <TopicsSection>
                <TopicButton>News</TopicButton>
                <TopicButton>Sport</TopicButton>
                <TopicButton>Voices</TopicButton>
            </TopicsSection>
        </MiddleRow>
        <NavigationRow></NavigationRow>
    </Wrapper>
  );
}
