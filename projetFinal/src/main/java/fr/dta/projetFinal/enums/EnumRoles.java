package fr.dta.projetFinal.enums;

public enum EnumRoles {
	ROLE_ADMIN("ROLE_ADMIN"),
	ROLE_USER("ROLE_USER");
	
	private String role;
	
	private EnumRoles(String s)
	{
		this.role = s;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}
