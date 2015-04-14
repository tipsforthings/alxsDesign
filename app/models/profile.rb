class Profile < ActiveRecord::Base
  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def profile_params
      params.require(:profile).permit(:firstname, :lastname, :dateofbirth, :bio, :user_id)
    end
end
