require 'rails_helper'

RSpec.describe "pages/index", :type => :view do
  before(:each) do
    assign(:pages, [
      Page.create!(
        :index => "Index"
      ),
      Page.create!(
        :index => "Index"
      )
    ])
  end

  it "renders a list of pages" do
    render
    assert_select "tr>td", :text => "Index".to_s, :count => 2
  end
end
