'use client'
import Wrapper from "@/components/utils/wrapper";
import styled from "styled-components";
import { SlArrowRight } from "react-icons/sl";

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
  border: var(--border-thickness) solid var(--light-grey);
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
  border-right: var(--border-thickness) solid var(--light-grey);
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
  border-left: var(--border-thickness) solid var(--light-grey);
`

const NavigationRow = styled.nav`
  width: 100%;
  box-sizing: border-box;
  border: var(--border-thickness) solid var(--light-grey);
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
  left: calc(0px - var(--border-thickness));
  top: 100%;
  border: var(--border-thickness) solid var(--light-grey);
`

const TopicDropdownMore = styled.ul`
  background: var(--grey);
  display: none;
  position: absolute;
  box-sizing: border-box;
  left: calc(0px - var(--border-thickness));
  top: 100%;
  width: calc(100% + 2 * var(--border-thickness));
  border: var(--border-thickness) solid var(--grey);
`

const TopicDropdownItemMore = styled.li`
  background: var(--grey);
  display: flex;
  color: var(--white);
  gap: var(--spacing);
  margin: 0 var(--spacing-medium);
  text-transform: none;
  padding: var(--padding-small) 0;
  position: relative;
  svg {
    position: absolute;
    height: var(--topic-section-arrow-size);
    width: var(--topic-section-arrow-size);
    top: 50%;
    transform: translateY(-50%);
    right: 0;
  }
  &:hover {
    background: var(--grey);
    &:after {
      position: absolute;
      bottom: 4px;
      left: 0;
      width: 100%;
      height: 1px;
      background: var(--white);
      content: '';
    }
  }
`

const TopicDropdownItemMoreWithArrow = ({ children }: any) => <TopicDropdownItemMore>
    { children }
    <SlArrowRight />
</TopicDropdownItemMore>

const TopicDropdownItemMoreSection = styled.section`
  width: 200px;
  margin: var(--spacing-medium) 0;
  border-right: var(--border-thickness) solid var(--white);
  &:first-child {
    margin-left: var(--spacing);
    border-left: var(--border-thickness) solid var(--white);
  }
`

const TopicDropdownItemMoreSectionHead = styled.div`
  display: flex;
  gap: var(--spacing);
  text-align: left;
  align-items: center;
  padding: var(--padding) var(--padding-medium);
  position: relative;
  font-size: var(--font-size-title);
  color: var(--white);
  &:hover {
    background: var(--grey);
    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: var(--red);
      content: '';
    }
  }
`

const RoundIcon = styled.div`
  height: var(--icon-size);
  width: var(--icon-size);
  border-radius: 50%;
  background: var(--white);
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

const TopicDropdownItemPremium = styled(TopicDropdownItem)`
  background: var(--faint-cyan);
  &:hover {
    background: var(--light-cyan);
  }
`

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

const TopicButtonMore = styled(TopicButton)`
  position: static;
  &:hover {
    background: var(--grey);
    color: var(--white);
    &:after {
      display: none;
    }
    ul {
      display: flex;
    }
  }
`

const TopicsSection = styled.section`
  position: relative;
  --topic-section-arrow-size: 8px;
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
                        <TopicDropdownItem>News</TopicDropdownItem>
                        <TopicDropdownItem>Sport</TopicDropdownItem>
                        <TopicDropdownItem>Voices</TopicDropdownItem>
                    </TopicDropdown>
                </TopicButton>
                <TopicButton>Sport</TopicButton>
                <TopicButton>Voices</TopicButton>
                <TopicButtonPremium>Premium
                    <TopicDropdown>
                        <TopicDropdownItemPremium>News</TopicDropdownItemPremium>
                        <TopicDropdownItemPremium>Sport</TopicDropdownItemPremium>
                        <TopicDropdownItemPremium>Voices</TopicDropdownItemPremium>
                    </TopicDropdown>
                </TopicButtonPremium>
                <TopicButtonMore>More
                    <TopicDropdownMore>
                        <TopicDropdownItemMoreSection>
                            <TopicDropdownItemMoreSectionHead>
                                <RoundIcon></RoundIcon>Best
                            </TopicDropdownItemMoreSectionHead>
                            <TopicDropdownItemMoreWithArrow>
                                Advisor
                            </TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Home & Garden</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Tech</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Broadband deals</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Fashion & Beauty</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Deals</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Food & Drink</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Kids</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Books</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Travel & Outdoors</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Sports & Fitness</TopicDropdownItemMoreWithArrow>
                        </TopicDropdownItemMoreSection>
                        <TopicDropdownItemMoreSection>
                            <TopicDropdownItemMoreSectionHead>
                                <RoundIcon></RoundIcon>Best
                            </TopicDropdownItemMoreSectionHead>
                            <TopicDropdownItemMoreWithArrow>Advisor</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Home & Garden</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Tech</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Broadband deals</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Fashion & Beauty</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Deals</TopicDropdownItemMoreWithArrow>
                        </TopicDropdownItemMoreSection>
                        <TopicDropdownItemMoreSection>
                            <TopicDropdownItemMoreSectionHead>
                                <RoundIcon></RoundIcon>Best
                            </TopicDropdownItemMoreSectionHead>
                            <TopicDropdownItemMoreWithArrow>Advisor</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Home & Garden</TopicDropdownItemMoreWithArrow>
                            <TopicDropdownItemMoreWithArrow>Tech</TopicDropdownItemMoreWithArrow>
                        </TopicDropdownItemMoreSection>
                    </TopicDropdownMore>
                </TopicButtonMore>
            </TopicsSection>
        </NavigationRow>
    </Wrapper>
  );
}
