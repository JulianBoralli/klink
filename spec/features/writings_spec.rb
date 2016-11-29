require 'rails_helper'

RSpec.feature "Writings", type: :feature do
  context 'a user' do
    describe 'initial page load' do
      include RSpecHtmlMatchers

      it 'loads with a letters palette' do
        visit write_path
        expect('<canvas id="canvas-palette" height="130" width="1000"></canvas>').to have_tag('canvas',  :with => { :id => 'canvas-palette' })
      end

      it 'loads with a canvas play palette' do
        visit write_path
        expect('<canvas id="canvas-play" height="550" width="1000"></canvas>').to have_tag('canvas',  :with => { :id => 'canvas-play' })
      end

      it 'loads button control options' do
        visit write_path
        expect('<div id="button-images" style="display: none">').to have_tag('div',  :with => { :id => 'button-images' })
      end

    end
  end
end
