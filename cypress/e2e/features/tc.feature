Feature: Telnyx — public checks
  Task #4

  Background:
    When the user opens the home page
    Then the home page is displayed

  @TC-1
  Scenario: Clicking the 'Start building for free' button opens the registration page

    When the user opens "Products" → "Voice AI" from the header
    Then the "Voice AI Agents" page from the 'Voice AI' is displayed
    And the URL of 'Voice AI Agents' contains "/products/voice-ai"
    When the user clicks the "START BUILDING FOR FREE" button
    Then the "Create a Telnyx account" form in the 'Sign Up' page is displayed
    And the URL of 'Sign Up' contains "/sign-up"

  @TC-2
  Scenario: Changing the Role also changes the spoken text in the "Text to speech" tab
    When the user clicks the "CALL YOUR AGENT" button at the bottom of viewport
    Then the page is scrolled to the tabs block
    And the "HD Voice AI", first tab, is active
    When the user click the "Text to speech" tab
    Then the "Text to speech", second tab, is active
    And the form of 'Text to speech' tab is visible
    When the user opens the "Role" select
    Then the list of Roles has 3 items
    When the user selects "Customer service" role
    Then the textarea text contains "customer service team"

  @TC-3
  Scenario: Clicking the "Contact us" link opens it

    When the user clicks the "Contact us" link in the header
    Then the "Talk to an expert" form in the 'Contact us' page is displayed
    And the URL of 'Contact us' contains "/contact-us"

  @TC-4
  Scenario: Clicking on a collapsible element reveals hidden text on the main page

    When the user scrolls to the "HOW IT WORKS" section
    Then the section has 6 collapsible blocks
    And the "Native-speech pipeline", first block, is active
    When the user clicks the "EU AI Infrastructure" text
    Then the "EU AI Infrastructure", last block, is active
    And the corresponding text for this block is displayed below

  @TC-5
  Scenario: Clicking on the arrow reveals the next code example

    When the user scrolls to the "FOR DEVELOPERS", above 'HOW IT WORKS', section
    Then the code block of the selected example is visible
    When the user clicks the right arrow at the end of the examples list
    Then the "Chat with a language model" code example is visible

  @TC-6
  Scenario: Clicking on a collapsible element reveals hidden text on the "Our Network" page

    When the user opens "Our Network" in the "Why Telnyx", first menu item
    Then the "Our Network" page from the "Why Telnyx" menu is displayed
    And the URL of "Our Network" contains "/our-network"
    When the user scrolls to the "FAQ" section on the 'Our Network' page
    Then 5 collapsible blocks are visible
    And the first "What is PoP in networking" block is active in the FAQ section
    When the user clicks the "What is MPLS?", fourth block
    Then the corresponding text for "What is MPLS?" block is displayed below
    And the first "What is PoP in networking" block's text is hidden