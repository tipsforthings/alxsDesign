class AnimultiController < ApplicationController
  def index
    render :file => 'public/animulti/index.html', :layout => false
  end
end
