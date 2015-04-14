class UserStepsController < ApplicationController
  include Wicked::Wizard
  steps :profile
  before_filter :authenticate_user!

  def show
    @user = current_user
    @profile = Profile.new
    render_wizard @user
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = current_user
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def profile_params
      params.require(:profile).permit(:firstname, :lastname, :dateofbirth, :bio, :user_id)
    end
end
